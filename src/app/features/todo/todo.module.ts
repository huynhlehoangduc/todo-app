import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFavouriteListComponent } from './components/todo-favourite-list/todo-favourite-list.component';
import { TodoDoneListComponent } from './components/todo-done-list/todo-done-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



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
        CommonModule,
        MatListModule,
        MatButtonModule,
        MatCheckboxModule,
        FormsModule,
        MatIconModule
    ]
})
export class TodoModule { }
