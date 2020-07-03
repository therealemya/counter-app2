import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
    it('only 1 h3 in footer ', () => {
        const wrapper = shallow(<Footer />);
        const text = wrapper.find('h3');
        expect(text).toHaveLength(1);
    })

    it('check if footer message is visible', () => {
        const wrapper = shallow(<Footer />);
        const text = wrapper.find('h3').text();
        expect(text).toEqual("Did You Reach Your Limit?");
    })
})
