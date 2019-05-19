import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';

import Header from '../../src/home/header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
    it('should renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.header').exists()).toEqual(true);
    });
});
