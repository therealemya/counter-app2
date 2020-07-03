import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
    it('only 1 h3 in Header ', () => {
        const wrapper = shallow(<Header />);
        const text = wrapper.find('h1');
        expect(text).toHaveLength(1);
    })

    it('check if header message is visible', () => {
        const wrapper = shallow(<Header />);
        const text = wrapper.find('h1').text();
        expect(text).toEqual("Counter App");
    })
})

