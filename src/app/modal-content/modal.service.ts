import { Injectable } from '@angular/core';

declare var $: any; // Declara $ como una variable global para usar jQuery

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor() {}

  openModal() {
    $('#myModal').modal('show');
  }

  closeModal() {
    $('#myModal').modal('hide');
  }

}