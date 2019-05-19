import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';

import Home from '../../src/home/home';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
    it('should renders without crashing', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('.row').exists()).toEqual(true);
    });
});
