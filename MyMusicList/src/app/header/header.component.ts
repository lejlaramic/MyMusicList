import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() openMenu: EventEmitter<any> = new EventEmitter();
  shouldOpen:boolean = false; 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  shouldOpenMenu(){
    this.shouldOpen = !this.openMenu;  
    this.openMenu.emit(!this.shouldOpen);
  }
  home(){
    this.router.navigate(['/Home/Card'] );

  }
}
