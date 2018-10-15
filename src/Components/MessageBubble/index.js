import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  ChatBubble, ChatMessage, ChatText, ChatTimeStamp, ChatAction,
} from '../DesignKit';

const MessageBubble = ({ todo, onDelete, onEdit }) => (
  <ChatBubble>
    <ChatMessage>
      <ChatText>{todo.text}</ChatText>
      <ChatTimeStamp>
        <i className="fa fa-clock" />&nbsp;&nbsp;
        {moment(todo.timeStamp).format('DD/MM/YYYY HH:mm')}
      </ChatTimeStamp>
    </ChatMessage>
    <ChatAction onClick={() => onEdit(todo.id)} title="Edit" className="fa fa-edit" />
    <ChatAction onClick={() => onDelete(todo.id)} title="Delete" className="fa fa-trash-alt" />
  </ChatBubble>);

MessageBubble.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default MessageBubble;
