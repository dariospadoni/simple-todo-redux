import React from 'react';
import { render, mount } from 'enzyme';
import moment from 'moment';
import MessageBubble from '../index';
import {
  ChatMessage, ChatText, ChatTimeStamp, ChatBubble, ChatAction,
} from '../../DesignKit/index';

describe('MessageBubble component', () => {
  const timeStamp = new Date('2018-10-15T12:00:00Z');
  const todo = { id: 'todo-1', timeStamp, text: 'test' };

  it('should render the component', () => {
    const mockFn = jest.fn();
    const component = mount(<MessageBubble todo={todo} onDelete={mockFn} onEdit={mockFn} />);
    expect(component.find(ChatBubble).exists()).toBe(true);
    expect(component.find(ChatMessage).exists()).toBe(true);
    expect(component.find(ChatText).text()).toBe('test');
    expect(component.find(ChatTimeStamp).text().trim()).toBe(moment(timeStamp).format('DD/MM/YYYY HH:mm'));
    expect(component.find(ChatAction).exists()).toBe(true);
    expect(component.find(ChatAction).exists()).toBe(true);
    expect(component.find(ChatAction).length).toBe(2);
    expect(component.find(ChatAction).first().hasClass('fa-edit')).toBe(true);
    expect(component.find(ChatAction).last().hasClass('fa-trash-alt')).toBe(true);
  });

  it('should trigger onEdit when clicking edit button', () => {
    const mockEdit = jest.fn();
    const mockDelete = jest.fn();
    const component = mount(<MessageBubble todo={todo} onDelete={mockDelete} onEdit={mockEdit} />);
    component.find(ChatAction).first().simulate('click');
    expect(mockEdit).toHaveBeenCalled();
    expect(mockDelete).not.toHaveBeenCalled();
  });

  it('should trigger onDelete when clicking delete button', () => {
    const mockEdit = jest.fn();
    const mockDelete = jest.fn();
    const component = mount(<MessageBubble todo={todo} onDelete={mockDelete} onEdit={mockEdit} />);
    component.find(ChatAction).last().simulate('click');
    expect(mockEdit).not.toHaveBeenCalled();
    expect(mockDelete).toHaveBeenCalled();
  });

  it('render snapshot', () => {
    const mockFn = jest.fn();
    const component = render(<MessageBubble todo={todo} onDelete={mockFn} onEdit={mockFn} />);
    expect(component).toMatchSnapshot();
  });
});
