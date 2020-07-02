import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
    it('only 1 h3 in footer ', () => {
        const wrapper = shallow(<Footer />);
        const text = wrapper.find('h3');
        expect(text).toHaveLength(1);
    });
});

describe('Tests for our app', () =>{
    it('knows that 2 and 2 make 4', () =>{
        expect(2 + 2).toEqual(4);
    })
})
