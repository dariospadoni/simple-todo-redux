import React from 'react';
import PropTypes from 'prop-types';
import { ChatInputForm } from '../DesignKit';

class MessageInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(evnt) {
    this.setState({ value: evnt.target.value });
  }

  onSubmit(evnt) {
    evnt.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' }); // reset input on submit
  }

  render() {
    return (
      <ChatInputForm onSubmit={this.onSubmit}>
        <input onChange={this.onChange} value={this.state.value} type="text" placeholder="Insert a to-do..." />
      </ChatInputForm>
    );
  }
}


MessageInput.propTypes = {
  onSubmit: PropTypes.func,
};

export default MessageInput;
