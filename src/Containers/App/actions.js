import {
  CANCEL_EDIT, REMOVE_TODO, SAVE_TODO, EDIT_TODO, INSERT_TODO,
} from './constants';

export function insertTodo(text, timeStamp) {
  return {
    type: INSERT_TODO,
    text,
    timeStamp,
  };
}

export function editTodo(id) {
  return {
    type: EDIT_TODO,
    id,
  };
}

export function saveTodo(text) {
  return {
    type: SAVE_TODO,
    text,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function cancelEdit() {
  return {
    type: CANCEL_EDIT,
  };
}
