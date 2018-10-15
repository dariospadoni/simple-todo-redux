import React from 'react';
import { mount, render } from 'enzyme';
import MessageEdit from '../index';
import { ChatForm, ChatBubble } from '../../DesignKit/index';

describe('MessageEdit component', () => {
  const todo = { id: 'todo-1', timeStamp: 123, text: 'test' };

  it('should render the component', () => {
    const mockFn = jest.fn();
    const component = mount(<MessageEdit todo={todo} onSave={mockFn} onCancel={mockFn} />);
    expect(component.find(ChatBubble).exists()).toBe(true);
    expect(component.find(ChatForm).exists()).toBe(true);
  });

  it('should cancel the editing on esc', () => {
    const mockSave = jest.fn();
    const mockCancel = jest.fn();
    const component = mount(<MessageEdit todo={todo} onSave={mockSave} onCancel={mockCancel} />);
    component.find('input').simulate('keyDown', { key: 'Escape' });
    expect(mockCancel).toHaveBeenCalled();
    expect(mockSave).not.toHaveBeenCalled();
  });

  it('should submit the the text on enter', () => {
    const mockSave = jest.fn();
    const mockCancel = jest.fn();
    const component = mount(<MessageEdit todo={todo} onSave={mockSave} onCancel={mockCancel} />);
    component.find(ChatForm).simulate('submit');
    expect(mockCancel).not.toHaveBeenCalled();
    expect(mockSave).toHaveBeenCalled();
  });

  it('render snapshot', () => {
    const mockFn = jest.fn();
    const component = render(<MessageEdit todo={todo} onSave={mockFn} onCancel={mockFn} />);
    expect(component).toMatchSnapshot();
  });
});
