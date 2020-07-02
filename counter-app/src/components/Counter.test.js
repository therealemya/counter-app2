import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter component', () => {
    it('increments count by 1 when the increment button is clicked', () => {
        const wrapper=shallow(<Counter/>);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
        incrementBtn.simulate('click');
        incrementBtn.simulate('click');
        const text = wrapper.find('h2').text();
        expect(text).toEqual('3');   
       });    
    });

    describe('Counter component', () => {
    it('decrement decreases by 1 when the decrement button is clicked', () => {
        const wrapper=shallow(<Counter/>);
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
        const text = wrapper.find('h3').text();
        expect(text).toEqual('');   
       });    
    });