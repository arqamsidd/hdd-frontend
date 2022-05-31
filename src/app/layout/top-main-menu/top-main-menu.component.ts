import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-main-menu',
  templateUrl: './top-main-menu.component.html',
  styleUrls: ['./top-main-menu.component.css']
})
export class TopMainMenuComponent implements OnInit {

  menuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    if(this.menuOpen){
      this.menuOpen = false;
    }
    else{
      this.menuOpen = true;
    }
  }

}
