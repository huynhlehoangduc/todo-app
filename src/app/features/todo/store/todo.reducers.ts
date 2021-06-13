import { createReducer, on } from '@ngrx/store';
import { add, list } from './todo.actions';
import { Todo } from '../interfaces/todo';


export const initialState: Todo[] = [];

export const todoReducer = createReducer(
    initialState,
    on(list, (state: Todo[]) => state),
    on(add, (state: Todo[], todo) => [...state, todo])
);
