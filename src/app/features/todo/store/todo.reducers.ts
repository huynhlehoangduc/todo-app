import { createReducer, on } from '@ngrx/store';
import { add, list } from './todo.actions';
import { Todo } from '../interfaces/todo';


export const initialState: Todo[] = [
    {
        id: 1,
        name: 'Todo 1',
        description: '',
        isDone: false,
        isFavourite: false,
    },
    {
        id: 2,
        name: 'Todo 2',
        description: '',
        isDone: true,
        isFavourite: false,
    },
    {
        id: 3,
        name: 'Todo 3',
        description: '',
        isDone: false,
        isFavourite: true,
    },
];

export const todoReducer = createReducer(
    initialState,
    on(list, (state: Todo[]) => state),
    on(add, (state: Todo[], todo) => [...state, todo])
);
