import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ModalService } from '../modal-content/modal.service';

declare var $: any; // Declara $ como una variable global para usar jQuery

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private modalService: ModalService) {}

  openModal(): void {
    this.modalService.openModal();
  }

}
