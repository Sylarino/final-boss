import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  title = 'finalboss';
  public showNav!: boolean;
  isOpen = false;
  constructor() {

  }
  
  ngOnInit(): void {
    this.showNav = false;
  }

  get stateName() {
    return this.showNav ? 'show' : 'hide'
  }

  showNavbar() {
    this.showNav = !this.showNav;
  }
}