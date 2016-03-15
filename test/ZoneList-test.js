import React from 'react';
import { shallow } from 'enzyme';
import ZoneList from '../app/components/ZoneList';
import Zone from '../app/components/Zone';

function mockZone(domain = 'a.a') {
  return {id: domain, kind: 'Master', dnssec: 0};
}

describe('<ZoneList />', () => {
  it('renders the entire list of zones', () => {
    const zones = [mockZone(), mockZone(), mockZone()];
    const spy = sinon.spy();
    const wrapper = shallow(<ZoneList zones={zones} filterText="" onZoneDelete={spy} />);
    expect(wrapper.find('tbody').children()).to.have.length(zones.length);
  });

  it('render a set of zones based on the domain name filter text', () => {
    const domainName = 'a.a'
    const reference_zone = mockZone(domainName);
    const zones = [reference_zone, mockZone('b.b'), mockZone('c.c')];
    const spy = sinon.spy();
    const wrapper = shallow(<ZoneList zones={zones} filterText={domainName} onZoneDelete={spy} />);
    expect(wrapper.contains(<Zone zone={reference_zone} key={reference_zone.id} onZoneDelete={spy} />)).to.equal(true);
  });
});
