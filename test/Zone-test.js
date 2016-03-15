import React from 'react';
import { shallow } from 'enzyme';
import Zone from '../app/components/Zone';

function mockZone() {
  return {id: 'a.a', kind: 'Master', dnssec: 0};
}

describe('<Zone />', () => {
  it('renders the Zone info.', () => {
    const zone = mockZone();
    const spy = sinon.spy();
    const wrapper = shallow(<Zone zone={zone} key={zone.id} onZoneDelete={spy} />);
    expect(wrapper.text()).to.contain(zone.id);
    expect(wrapper.text()).to.contain(zone.kind);
    expect(wrapper.text()).to.contain(zone.dnssec);
  });

  it('calls onZoneDelete handler with the right arguments when clicked', () => {
    const zone = mockZone();
    const spy = sinon.spy();
    const wrapper = shallow(<Zone zone={zone} key={zone.id} onZoneDelete={spy} />);
    wrapper.find('#delete-zone-button').simulate('click');
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(zone)).to.be.true;
  });
});
