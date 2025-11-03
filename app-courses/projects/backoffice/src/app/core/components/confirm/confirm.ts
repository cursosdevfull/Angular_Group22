import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'bo-confirm',
  imports: [MatDialogActions,
    MatDialogClose,
    MatDialogContent, MatButtonModule],
  templateUrl: './confirm.html',
  styleUrl: './confirm.css'
})
export class Confirm {
  message = "Are you sure you want to delete this item?";
}
