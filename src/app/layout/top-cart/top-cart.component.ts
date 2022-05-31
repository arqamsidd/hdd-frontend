import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-cart',
  templateUrl: './top-cart.component.html',
  styleUrls: ['./top-cart.component.css']
})
export class TopCartComponent implements OnInit {
  cloading = false;
  constructor() { }

  ngOnInit(): void {
  }

}
