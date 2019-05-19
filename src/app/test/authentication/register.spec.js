import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';

import Register from '../../src/authentication/register';

Enzyme.configure({ adapter: new Adapter() });

describe('Register', () => {
    it('should renders without crashing', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find('.register').exists()).toEqual(true);
    });
});
