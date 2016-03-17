import React from 'react';
import { shallow } from 'enzyme';
import ZoneForm from '../app/components/ZoneForm';

function mockZone() {
  return {id: 'a.a', kind: 'Master', dnssec: 0};
}
// <ZoneForm onZoneSubmit={this.handleZoneSubmit} />

describe('<ZoneForm />', () => {
  it('add a Zone entry', () => {

  });

  it('calls onZoneSubmit handler with the right arguments when clicked', () => {
    // const onButtonClick = sinon.spy();
    // const wrapper = shallow(
    //   <Foo onButtonClick={onButtonClick} />
    // );
    const zone = mockZone();
    const spy = sinon.spy();
    // const wrapper = shallow(<Zone zone={zone} key={zone.id} onZoneDelete={spy} />);
    const wrapper = shallow(<ZoneForm onZoneSubmit={spy} />);
    wrapper.find('#add-zone-button').simulate('click');
    // expect(spy.calledOnce).to.be.true;
    // expect(spy.calledWith(zone)).to.be.true;
  });
});
