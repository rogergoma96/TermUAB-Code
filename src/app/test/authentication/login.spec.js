import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';

import Login from '../../src/authentication/login';

Enzyme.configure({ adapter: new Adapter() });

describe('Login', () => {
    it('should renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('.login').exists()).toEqual(true);
    });
});
