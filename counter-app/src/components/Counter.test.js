import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter component', () => {
    it('increments count by 1 when the increment button is clicked', () => {
        const wrapper=shallow(<Counter/>);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
        const text = wrapper.find('h2').text();
        expect(text).toEqual('1');   
       });    
    });