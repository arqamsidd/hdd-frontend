import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  collapsed = true;
  menuOpen = false;
  constructor(private offcanvasService: NgbOffcanvas) {}

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  openMenu(){
    if(this.menuOpen){
      this.menuOpen = false;
    }
    else{
      this.menuOpen = true;
    }
  }

  ngOnInit(): void {
  }

}
