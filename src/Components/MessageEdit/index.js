import React from 'react';
import PropTypes from 'prop-types';
import { ChatBubble, ChatEditForm } from '../DesignKit';

class MessageEdit extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: this.props.todo.text };
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this._input.focus();  // auto-focus on mount
  }

  onKeyDown(e) {
    if (e.key === 'Escape') {
      this.props.onCancel();  // on ESC quit editing
    }
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    // just make sure new text is not empty
    if (this.state.value !== '') {
      this.props.onSave(this.state.value);
    }
  }

  render() {
    return (
      <ChatBubble>
        <ChatEditForm onSubmit={this.onSubmit}>
          <input ref={(c) => { this._input = c; }} onKeyDown={this.onKeyDown} onChange={this.onChange} value={this.state.value} type="text" />
        </ChatEditForm>
      </ChatBubble>
    );
  }
}


MessageEdit.propTypes = {
  todo: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};

export default MessageEdit;
