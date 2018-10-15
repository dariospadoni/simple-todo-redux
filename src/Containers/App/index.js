import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessageInput from '../../Components/MessageInput';
import MessageBubble from '../../Components/MessageBubble';
import MessageEdit from '../../Components/MessageEdit';
import { ChatApp, ChatHeader, ChatMessages } from '../../Components/DesignKit';
import {
  insertTodo, saveTodo, removeTodo, editTodo, cancelEdit,
} from './actions';

class ChatWebApp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onMessageEntered = this.onMessageEntered.bind(this);
    this.onMessageEdit = this.onMessageEdit.bind(this);
    this.onCancelEdit = this.onCancelEdit.bind(this);
    this.onMessageSave = this.onMessageSave.bind(this);
    this.onMessageDeleted = this.onMessageDeleted.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.todos.length > prevProps.todos.length) {
      // make sure to scroll to the last entered todo
      this._scroll.scrollTop = this._scroll.scrollHeight;
    }
  }

  onMessageEntered(todoText) {
    this.props.dispatch(insertTodo(todoText, (new Date()).getTime()));
  }

  onMessageDeleted(todoId) {
    this.props.dispatch(removeTodo(todoId));
  }

  onCancelEdit() {
    this.props.dispatch(cancelEdit());
  }

  onMessageEdit(todoId) {
    this.props.dispatch(editTodo(todoId));
  }

  onMessageSave(todoText) {
    this.props.dispatch(saveTodo(todoText));
  }

  render() {
    return (
      <ChatApp>
        <ChatHeader><h1>My todo list</h1></ChatHeader>
        <ChatMessages innerRef={(c) => { this._scroll = c; }} >
          {this.props.todos.map((todo) => this.props.todoBeingEdited === todo.id
            ? <MessageEdit key={todo.id} todo={todo} onSave={this.onMessageSave} onCancel={this.onCancelEdit} />
            : <MessageBubble key={todo.id} todo={todo} onEdit={this.onMessageEdit} onDelete={this.onMessageDeleted} />)
          }
        </ChatMessages>
        <MessageInput onSubmit={this.onMessageEntered} />
      </ChatApp>
    );
  }
}

ChatWebApp.propTypes = {
  dispatch: PropTypes.func,
  todos: PropTypes.array,
  todoBeingEdited: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    todoBeingEdited: state.todoBeingEdited,
  };
}


export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatWebApp);
