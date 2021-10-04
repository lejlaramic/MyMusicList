import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  cards:any=[];
  openMenu:boolean = false; 
  constructor() { }

  ngOnInit(): void {
  }
  openSideMenu(){
    this.openMenu = !this.openMenu;
  }

}
