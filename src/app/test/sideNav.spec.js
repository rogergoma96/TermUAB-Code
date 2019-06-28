import _ from 'lodash';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';

import SideNav from '../src/sideNav';

Enzyme.configure({ adapter: new Adapter() });

describe('SideNav', () => {
    const props = { session: true };

    it('should renders without crashing', () => {
        const wrapper = shallow(<SideNav {...props} />);

        expect(wrapper.find('.sidenav').exists()).toEqual(true);
    });

    it('should renders without authentication session', () => {
        const sideNavProps = _.cloneDeep(props);
        sideNavProps.session = false;
        const wrapper = shallow(<SideNav {...sideNavProps} />);

        expect(wrapper.find('.item').length).toEqual(5);
    });

    it('should renders with authentication session', () => {
       const wrapper = shallow(<SideNav {...props} />);

       expect(wrapper.find('.item').length).toEqual(3);
    });
});
