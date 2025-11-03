import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScheduleType } from '../schedule-type';

@Component({
  selector: 'bo-schedule-form',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatDialogActions,
    MatDialogClose,
    MatDialogContent, MatIconModule, ReactiveFormsModule],
  templateUrl: './schedule-form.html',
  styleUrl: './schedule-form.css'
})
export class ScheduleForm {
  data: ScheduleType | null = inject(MAT_DIALOG_DATA);
  title = this.data ? "Edit" : "Add";

  fg = new FormGroup({
    id: new FormControl(this.data?.id || ''),
    course: new FormControl(this.data?.course || '', Validators.required),
    instructor: new FormControl(this.data?.instructor || '', Validators.required),
    time: new FormControl(this.data?.time || '', Validators.required),
    days: new FormControl(this.data?.days || '', Validators.required),
  })

  constructor(private readonly reference: MatDialogRef<ScheduleForm>) { }

  save() {
    const values = this.fg.value;
    this.reference.close(values);
  }
}
