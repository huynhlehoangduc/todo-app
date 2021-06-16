import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { getRandomInt } from '../../../../core/utils/math';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { add, deleteTodo, list, update } from '../../store/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/interfaces/app-state';
import { MatDialog } from '@angular/material/dialog';
import { TodoEditDialogComponent } from '../todo-edit-dialog/todo-edit-dialog.component';

@Component({
    selector: 'app-todo-base-list',
    templateUrl: './todo-base-list.component.html',
    styleUrls: ['./todo-base-list.component.scss'],
})
export class TodoBaseListComponent implements OnInit {

    @Input() todos: Todo[] = [];
    @Input() showAddBtn: boolean = false;
    @Input() showRefreshBtn: boolean = false;
    @Input() title: string = '';

    constructor(private readonly store: Store<AppState>,
                private readonly dialog: MatDialog) { }

    ngOnInit(): void {
    }

    edit(data: Todo | null = null): void {
        const dialogRef = this.dialog.open(TodoEditDialogComponent, {
            width: '600px',
            data
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (!result) {
                return;
            }

            if (!data) {
                this.store.dispatch(add({ todo: result }));
            } else {
                this.store.dispatch(update({ todo: result }));
            }
        });
    }

    checkDone(event: MatCheckboxChange, id: number): void {
        const todo = { id, isDone: event.checked };
        this.store.dispatch(update({ todo }));
    }

    checkFavourite(todo: Todo): void {
        const newTodo = { id: todo.id, isFavourite: !todo.isFavourite };
        this.store.dispatch(update({ todo: newTodo }));
    }

    refresh(): void {
        this.store.dispatch(list());
    }

    delete(id: number): void {
        this.store.dispatch(deleteTodo({ id }));
    }

    addRamDom(): void {
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
}
