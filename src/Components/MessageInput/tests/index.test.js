import React from 'react';
import { render, shallow } from 'enzyme';
import MessageInput from '../index';
import { ChatInputForm } from '../../DesignKit/index';


describe('MessageInput component', () => {
  it('should render the component', () => {
    const mockFn = jest.fn();
    const component = shallow(<MessageInput value="test" onSubmit={mockFn} />);
    expect(component.find(ChatInputForm).exists()).toBe(true);
  });

  it('should submit on enter', () => {
    const mockFn = jest.fn();
    const component = shallow(<MessageInput value="test" onSubmit={mockFn} />);
    component.find(ChatInputForm).simulate('submit', {
      preventDefault: () => {},
    });
    expect(mockFn).toHaveBeenCalled();
  });

  it('render snapshot', () => {
    const mockFn = jest.fn();
    const component = render(<MessageInput value="test" onSubmit={mockFn} />);
    expect(component).toMatchSnapshot();
  });
});
