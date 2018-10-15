import { INSERT_TODO, REMOVE_TODO } from '../constants';
import { insertTodo, removeTodo } from '../actions';

describe('Todo Actions', () => {
  describe('insertTodo', () => {
    it('should return the correct text and timeStamp', () => {
      const text = 'this is a test';
      const timeStamp = (new Date()).getTime();

      const expectedResult = {
        type: INSERT_TODO,
        text,
        timeStamp,
      };

      expect(insertTodo(text, timeStamp)).toEqual(expectedResult);
    });
  });

  describe('removeTodo', () => {
    it('should return the correct id', () => {
      const id = 'todo-1';

      const expectedResult = {
        type: REMOVE_TODO,
        id,
      };

      expect(removeTodo(id)).toEqual(expectedResult);
    });
  });
});
