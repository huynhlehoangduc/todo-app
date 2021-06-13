import { createSelector } from '@ngrx/store';
import { Todo } from '../interfaces/todo';
import { AppState } from '../../../core/interfaces/app-state';

export const todosSelector = createSelector(
    (state: AppState) => state.todo,
    (todos: Todo[]) => todos
);

export const todosDoneSelector = createSelector(
    (state: AppState) => state.todo,
    (todos: Todo[]) => todos.filter(todo => todo.isDone)
);

export const todosFavouriteSelector = createSelector(
    (state: AppState) => state.todo,
    (todos: Todo[]) => todos.filter(todo => todo.isFavourite)
);
