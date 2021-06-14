import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo';

export const list = createAction('[Todo] List');
export const listFavourite = createAction('[Todo] List favourite');
export const listDone = createAction('[Todo] List done');

export const add = createAction('[Todo] add', props<{ todo: Todo}>());
export const update = createAction('[Todo] update', props<{ todo: Todo }>());
