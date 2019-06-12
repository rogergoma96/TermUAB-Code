import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';

import SideNav from '../../src/sideNav';

Enzyme.configure({ adapter: new Adapter() });

describe('SideNav', () => {
    it('should renders without crashing', () => {
        const wrapper = shallow(<SideNav />);
        expect(wrapper.find('.sidenav').exists()).toEqual(true);
    });
});
