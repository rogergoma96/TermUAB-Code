import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';

import SignUp from '../../src/authentication/signUp';

Enzyme.configure({ adapter: new Adapter() });

describe('SignUp', () => {
    it('should renders without crashing', () => {
        const wrapper = shallow(<SignUp />);
        expect(wrapper.find('.signUp').exists()).toEqual(true);
    });
});
