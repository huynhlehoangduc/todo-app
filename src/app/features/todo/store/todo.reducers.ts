import { createReducer, on } from '@ngrx/store';
import { add, deleteTodo, list, update } from './todo.actions';
import { Todo } from '../interfaces/todo';

const storedTodo = localStorage.getItem('TODOS');
const todos = storedTodo ? JSON.parse(storedTodo) : [];
export const initialState: Todo[] = todos;

export const todoReducer = createReducer(
    initialState,
    on(list, (state: Todo[]) => state),
    on(deleteTodo, (state: Todo[], { id }) => state.filter(todo => todo.id !== id)),
    on(add, (state: Todo[], { todo }) => {
        const newState = [...state, todo];
        localStorage.setItem('TODOS', JSON.stringify(newState));
        return newState;
    }),
    on(update, (state: Todo[], { todo }) => {
        const newState = [...state];
        const index = newState.findIndex(itemTodo => itemTodo.id === todo.id);
        newState[index] = { ... newState[index], ...todo };
        localStorage.setItem('TODOS', JSON.stringify(newState));
        return newState;
    }),
);
