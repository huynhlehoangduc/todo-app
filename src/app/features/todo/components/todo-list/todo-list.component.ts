import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { todosSelector } from '../../store/todo.selectors';
import { add, list, update } from '../../store/todo.actions';
import { AppState } from '../../../../core/interfaces/app-state';
import { Todo } from '../../interfaces/todo';
import { getRandomInt } from '../../../../core/utils/math';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    todos$ = this.store.select(todosSelector);

    displayedColumns = ['isDone', 'id', 'name', 'description', 'action'];

    constructor(private readonly store: Store<AppState>) { }

    ngOnInit(): void {
    }

    refresh(): void {
        this.store.dispatch(list());
    }

    add(): void {
        const id = getRandomInt(1, 100);
        const isDone = !!getRandomInt(0, 2);
        const isFavourite = !!getRandomInt(0, 2);
        const todo = {
            id,
            name: `Todo ${ id }`,
            description: '',
            isDone,
            isFavourite
        } as Todo;
        this.store.dispatch(add({ todo }));
    }

    checkDone(event: MatCheckboxChange, id: number): void {
        const todo = { id, isDone: event.checked };
        this.store.dispatch(update({ todo }));
    }
}
