import {
  REMOVE_TODO, SAVE_TODO, INSERT_TODO, EDIT_TODO, CANCEL_EDIT,
} from './constants';

const initialState = {
  todoBeingEdited: null,
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => todo.id !== state.todoBeingEdited
            ? todo
            : Object.assign({}, todo, { text: action.text })),
        todoBeingEdited: null,
      });
    case CANCEL_EDIT:
      return Object.assign({}, state, { todoBeingEdited: null });
    case EDIT_TODO:
      return Object.assign({}, state, { todoBeingEdited: action.id });
    case REMOVE_TODO:
      return Object.assign({}, state, { todos: state.todos.filter((todo) => todo.id !== action.id) });
    case INSERT_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            timeStamp: action.timeStamp,
            id: `todo-${action.timeStamp}`,
          },
        ],
      });
    default:
      return state;
  }
}

export default todoReducer;
