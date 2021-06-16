import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { todosSelector } from '../../store/todo.selectors';
import { AppState } from '../../../../core/interfaces/app-state';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    todos$ = this.store.select(todosSelector);

    constructor(private readonly store: Store<AppState>) { }

    ngOnInit(): void {
    }
}
