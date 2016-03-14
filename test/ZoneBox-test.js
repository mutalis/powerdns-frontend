import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ZoneBox from '../app/components/ZoneBox';
import Zone from '../app/components/Zone';


describe('<ZoneBox />', () => {
  it('renders the title', () => {
    const wrapper = mount(<ZoneBox />);
    const zones = wrapper.find(Zone);
    expect(zones).to.have.length.of(4);
    // expect(wrapper.text()).to.contain('b.b');
  });
});
