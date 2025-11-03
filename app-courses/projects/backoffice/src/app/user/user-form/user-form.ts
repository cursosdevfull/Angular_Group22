import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserType } from '../user-type';

@Component({
  selector: 'bo-user-form',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatDialogActions,
    MatDialogClose,
    MatDialogContent, MatIconModule, ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm {
  data: UserType | null = inject(MAT_DIALOG_DATA);
  title = this.data ? "Edit" : "Add";

  fg = new FormGroup({
    id: new FormControl(this.data?.id || ''),
    username: new FormControl(this.data?.username || '', Validators.required),
    email: new FormControl(this.data?.email || '', [Validators.required, Validators.email]),
    role: new FormControl(this.data?.role || '', Validators.required)
  })

  constructor(private readonly reference: MatDialogRef<UserForm>) { }

  save() {
    const values = this.fg.value;
    this.reference.close(values);
  }
}
