import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';

import Home from '../../src/home/home';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
    const props = {
        labels: {
            cards: ['1', '2', '3'],
        },
        session: true,
    };

    it('should renders without crashing', () => {
        const wrapper = shallow(<Home {...props} />);
        expect(wrapper.find('.row').exists()).toEqual(true);
    });
});
