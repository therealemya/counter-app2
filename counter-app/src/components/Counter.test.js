import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Tests for our app', () =>{
    it('knows that 2 and 2 make 4', () =>{
        expect(2 + 2).toEqual(4);
    })
})

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
    it('increments count by 1 when the increment button is clicked', () => {
        const wrapper = shallow(<Counter />);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
        const text = wrapper.find('h2');
        expect(text).toHaveLength(1);   
    });
});

    describe('Counter component', () => {
    it('decreases count by 1 when decreased button is clicked', () => {
        const wrapper=shallow(<Counter/>);
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
        const text = wrapper.find('h3').text();
        expect(text).toEqual("");   
       });    
    });

    describe('Counter component decrement', () => {
    it('decrements count does not go under zero',() => {
        const wrapper = shallow(<Counter />);
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
    });
});