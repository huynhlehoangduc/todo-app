import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../../interfaces/todo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getRandomInt } from '../../../../core/utils/math';

@Component({
    selector: 'app-todo-edit-dialog',
    templateUrl: './todo-edit-dialog.component.html',
    styleUrls: ['./todo-edit-dialog.component.scss']
})
export class TodoEditDialogComponent implements OnInit {

    rf!: FormGroup;

    constructor(private readonly dialogRef: MatDialogRef<TodoEditDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private readonly data: Todo | null,
                private readonly fb: FormBuilder) { }

    ngOnInit(): void {
        this.rf = this.fb.group({
            id: this.fb.control(this.data ? this.data.id : getRandomInt(1, 100), Validators.required),
            name: this.fb.control(this.data ? this.data.name : '', Validators.required),
            isDone: this.fb.control(this.data ? this.data.isDone : false, Validators.required),
            isFavourite: this.fb.control(this.data ? this.data.isFavourite : false, Validators.required),
        });
    }

    submit(): void {
        this.rf.markAllAsTouched();
        if (this.rf.invalid) { return; }
        this.dialogRef.close(this.rf.value);
    }

    cancel(): void {
        this.dialogRef.close(false);
    }
}
