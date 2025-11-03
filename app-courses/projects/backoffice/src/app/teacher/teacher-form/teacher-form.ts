import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeacherType } from '../teacher-type';

@Component({
  selector: 'bo-teacher-form',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatDialogActions,
    MatDialogClose,
    MatDialogContent, MatIconModule, ReactiveFormsModule],
  templateUrl: './teacher-form.html',
  styleUrl: './teacher-form.css',
  encapsulation: ViewEncapsulation.None
})
export class TeacherForm {
  data: TeacherType | null = inject(MAT_DIALOG_DATA);
  title = this.data ? "Edit" : "Add";

  fg = new FormGroup({
    id: new FormControl(this.data?.id || ''),
    firstName: new FormControl(this.data?.firstName || '', Validators.required),
    lastName: new FormControl(this.data?.lastName || '', Validators.required),
    email: new FormControl(this.data?.email || '', [Validators.required, Validators.email]),
    phone: new FormControl(this.data?.phone || '', Validators.required),
    department: new FormControl(this.data?.department || '', Validators.required),
  })

  constructor(private readonly reference: MatDialogRef<TeacherForm>) { }

  save() {
    const values = this.fg.value;
    this.reference.close(values);
  }
}
