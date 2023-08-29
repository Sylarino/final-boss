import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ModalService } from '../modal-content/modal.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.openModal();
  }

  openModal() {
    this.modalService.openModal();
  }

  closeModal() {
    this.modalService.closeModal();
  }

}
