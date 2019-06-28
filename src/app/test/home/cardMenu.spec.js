import _ from 'lodash';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';

import CardMenu from '../../src/home/cardMenu';

Enzyme.configure({ adapter: new Adapter() });

describe('CardMenu', () => {
    const props = { labels: { title: '', description: '', link: '' }, url: ''};

    it('should renders without crashing', () => {
        const wrapper = shallow(<CardMenu {...props} />);

        expect(wrapper.find('.card').exists()).toEqual(true);
    });
});
