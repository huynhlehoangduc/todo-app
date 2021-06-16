import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFavouriteListComponent } from './components/todo-favourite-list/todo-favourite-list.component';
import { TodoDoneListComponent } from './components/todo-done-list/todo-done-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TodoBaseListComponent } from './components/todo-base-list/todo-base-list.component';
import { TodoEditDialogComponent } from './components/todo-edit-dialog/todo-edit-dialog.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
    declarations: [
        TodoListComponent,
        TodoFavouriteListComponent,
        TodoDoneListComponent,
        TodoBaseListComponent,
        TodoEditDialogComponent
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
        MatIconModule,
        OverlayModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatTooltipModule
    ],
})
export class TodoModule { }
