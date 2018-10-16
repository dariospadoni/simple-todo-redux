import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ChatWebApp from '../index';
import { ChatMessages, ChatApp } from '../../../Components/DesignKit';
import Header from '../../../Components/Header';
import MessageInput from '../../../Components/MessageInput';
import MessageEdit from '../../../Components/MessageEdit';
import MessageBubble from '../../../Components/MessageBubble';

describe('<ChatWebApp />', () => {
  it('should render all the main UI element from an empty initial state', () => {
    const initialState = { todos: [], todoBeingEdited: null };
    const store = configureMockStore()(initialState);
    const component = shallow(<ChatWebApp store={store} />).dive();
    expect(component.find(ChatApp).exists()).toBe(true);
    expect(component.find(Header).exists()).toBe(true);
    expect(component.find(ChatMessages).exists()).toBe(true);
    expect(component.find(MessageInput).exists()).toBe(true);
    expect(component.find(MessageBubble).exists()).toBe(false);
    expect(component.find(MessageEdit).exists()).toBe(false);
  });


  it('should render the Chat Input when a todo is being edited', () => {
    const initialState = { todos: [
        { id: '1', text: 'todo #1', timeStamp: 1539547822975 },
        { id: '2', text: 'todo #2', timeStamp: 1539547822915 },
    ],
      todoBeingEdited: '1',
    };
    const store = configureMockStore()(initialState);
    const component = shallow(<ChatWebApp store={store} />).dive();
    expect(component.find(ChatApp).exists()).toBe(true);
    expect(component.find(Header).exists()).toBe(true);
    expect(component.find(ChatMessages).exists()).toBe(true);
    expect(component.find(MessageInput).exists()).toBe(true);
    expect(component.find(MessageBubble).exists()).toBe(true);
    expect(component.find(MessageEdit).exists()).toBe(true);
  });
});

