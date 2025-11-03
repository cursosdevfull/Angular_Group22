import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseType } from '../course-type';

@Component({
  selector: 'bo-course-form',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatDialogActions,
    MatDialogClose,
    MatDialogContent, MatIconModule, ReactiveFormsModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css',
  encapsulation: ViewEncapsulation.None
})
export class CourseForm {
  data: CourseType | null = inject(MAT_DIALOG_DATA);
  title = this.data ? "Edit" : "Add";

  fg = new FormGroup({
    id: new FormControl(this.data?.id || ''),
    name: new FormControl(this.data?.name || '', Validators.required),
  })

  constructor(private readonly reference: MatDialogRef<CourseForm>) { }


  save() {
    const values = this.fg.value;
    this.reference.close(values);
  }
}
