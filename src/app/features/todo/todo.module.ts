import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFavouriteListComponent } from './components/todo-favourite-list/todo-favourite-list.component';
import { TodoDoneListComponent } from './components/todo-done-list/todo-done-list.component';



@NgModule({
    declarations: [
        TodoListComponent,
        TodoFavouriteListComponent,
        TodoDoneListComponent
    ],
    exports: [
        TodoListComponent,
        TodoFavouriteListComponent,
        TodoDoneListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TodoModule { }
