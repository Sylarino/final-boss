import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContentComponent } from './modal-content.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(ModalContentComponent, {
      width: '400px', // Ancho del modal
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('El modal se cerró');
    });
  }
}