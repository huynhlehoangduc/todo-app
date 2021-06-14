import { createReducer, on } from '@ngrx/store';
import { add, list, update } from './todo.actions';
import { Todo } from '../interfaces/todo';


export const initialState: Todo[] = [];

export const todoReducer = createReducer(
    initialState,
    on(list, (state: Todo[]) => state),
    on(add, (state: Todo[], { todo }) => [...state, todo]),
    on(update, (state: Todo[], { todo }) => {
        const newState = [...state];
        const index = newState.findIndex(itemTodo => itemTodo.id === todo.id);
        newState[index] = { ... newState[index], ...todo };
        return newState;
    }),
);
