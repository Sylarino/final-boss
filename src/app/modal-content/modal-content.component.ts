import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent {
  constructor(public dialogRef: MatDialogRef<ModalContentComponent>) { }

  closeModal(): void {
    this.dialogRef.close();
  }
}