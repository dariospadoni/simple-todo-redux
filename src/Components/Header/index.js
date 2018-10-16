import React from 'react';
import PropTypes from 'prop-types';
import { ChatHeader } from '../DesignKit';

const Header = ({ numTodos }) => (<ChatHeader>
  <h1>My to-do list</h1>
  <div className="counter">You have <strong>{numTodos}</strong> To-dos</div>
</ChatHeader>);

Header.propTypes = {
  numTodos: PropTypes.number,
};

export default Header;
