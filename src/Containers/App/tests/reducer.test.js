import todoReducer from '../reducer';
import {
  insertTodo, editTodo, cancelEdit, saveTodo, removeTodo,
} from '../actions';

describe('todoReducer', () => {
  const state = {
    todoBeingEdited: null,
    todos: [],
  };

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(todoReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the insertTodo action correctly', () => {
    const timeStamp = (new Date()).getTime();
    const text = 'pass the tests';
    const expectedResult = {
      todoBeingEdited: null,
      todos: [{ id: `todo-${timeStamp}`, timeStamp, text }],
    };
    expect(todoReducer(state, insertTodo(text, timeStamp))).toEqual(expectedResult);
  });

  it('should handle the editTodo action correctly', () => {
    const expectedResult = {
      todoBeingEdited: '1',
      todos: [],
    };
    expect(todoReducer(state, editTodo('1'))).toEqual(expectedResult);
  });

  it('should handle the cancelEdit action correctly', () => {
    const expectedResult = {
      todoBeingEdited: null,
      todos: [],
    };
    expect(todoReducer(state, cancelEdit())).toEqual(expectedResult);
  });

  it('should handle the saveTodo action correctly', () => {
    const prevState = {
      todoBeingEdited: '1',
      todos: [{ id: '1', text: 'hello world', timeStamp: 1539547822975 }],
    };
    const expectedResult = {
      todoBeingEdited: null,
      todos: [{ id: '1', text: 'hey there!', timeStamp: 1539547822975 }],
    };
    expect(todoReducer(prevState, saveTodo('hey there!'))).toEqual(expectedResult);
  });

  it('should handle the removeTodo action correctly', () => {
    const prevState = {
      todoBeingEdited: null,
      todos: [{ id: '1', text: 'hello world', timeStamp: 1539547822975 }],
    };
    const expectedResult = {
      todoBeingEdited: null,
      todos: [],
    };
    expect(todoReducer(prevState, removeTodo('1'))).toEqual(expectedResult);
  });
});
