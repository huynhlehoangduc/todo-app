import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { todosFavouriteSelector } from '../../store/todo.selectors';
import { AppState } from '../../../../core/interfaces/app-state';

@Component({
    selector: 'app-todo-favourite-list',
    templateUrl: './todo-favourite-list.component.html',
    styleUrls: ['./todo-favourite-list.component.scss']
})
export class TodoFavouriteListComponent implements OnInit {

    todos$ = this.store.select(todosFavouriteSelector);

    constructor(private readonly store: Store<AppState>) { }

    ngOnInit(): void {
    }

}
