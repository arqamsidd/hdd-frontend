import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  


  collapsed = true;
  constructor(private offcanvasService: NgbOffcanvas) {}

 

  


  ngOnInit(): void {
  }

}
