import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
    it('only 1 h1 is rendered ', () => {
        const wrapper = shallow(<Header />);
        const text = wrapper.find('h1');
        expect(text).toHaveLength(1);
    });
});

describe('Tests for our app', () =>{
    it('knows that 2 and 2 make 4', () =>{
        expect(2 + 2).toEqual(4);
    })
})