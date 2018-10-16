import React from 'react';
import { render, mount } from 'enzyme';
import Header from '../index';
import { ChatHeader } from '../../DesignKit';

describe('Header component', () => {
  it('should render the component', () => {
    const component = mount(<Header numTodos={2} />);
    expect(component.find(ChatHeader).exists()).toBe(true);
    expect(component.find(ChatHeader).find('h1').exists()).toBe(true);
    expect(component.find(ChatHeader).find('.counter').exists()).toBe(true);
    expect(component.find(ChatHeader).find('.counter > strong').text()).toBe('2');
  });

  it('render snapshot', () => {
    const component = render(<Header numTodos={2} />);
    expect(component).toMatchSnapshot();
  });
});
