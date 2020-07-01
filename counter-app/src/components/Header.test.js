import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
    it('only 1 <h1> is rendered ', () => {
        const wrapper = shallow(<Header />);
        const text = wrapper.find('h2').text();
        expect(text).toEqual('1');
    });
});