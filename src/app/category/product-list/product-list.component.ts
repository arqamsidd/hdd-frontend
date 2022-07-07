import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  grid = true;
  page = 1;
  pageSize = 8;
  prods = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  constructor() { }

  ngOnInit(): void {
  }

  toggleGrid(){
    this.grid = true;
  }

  toggleList(){
    this.grid = false;
  }


}
