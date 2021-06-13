import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { todosDoneSelector } from '../../store/todo.selectors';
import { AppState } from '../../../../core/interfaces/app-state';

@Component({
    selector: 'app-todo-done-list',
    templateUrl: './todo-done-list.component.html',
    styleUrls: ['./todo-done-list.component.scss']
})
export class TodoDoneListComponent implements OnInit {

    todos$ = this.store.select(todosDoneSelector);

    constructor(private readonly store: Store<AppState>) { }

    ngOnInit(): void {
    }

}
