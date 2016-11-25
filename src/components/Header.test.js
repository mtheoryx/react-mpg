import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import { shallow } from 'enzyme';

it('renders with out crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Header headerText="test text"/>, div);
});

it('should render the headerText passed in', () => {
    const wrapper = shallow(<Header headerText="Hello Testing!"/>);
    const headerText = <h2>Hello Testing!</h2>;

    expect(wrapper.contains(headerText)).toEqual(true);
});

it('should handle title casing on its own', () => {
	const wrapper = shallow(<Header headerText="hi bob"/>);
	const headerText = <h2>Hi Bob</h2>;

    expect(wrapper.contains(headerText)).toEqual(true);
});




