import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-accessories',
  templateUrl: './product-accessories.component.html',
  styleUrls: ['./product-accessories.component.css']
})
export class ProductAccessoriesComponent implements OnInit {
  cartQty = 1;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCart(){
    this.cartQty++;
  }

  decrementCart(){
    this.cartQty--;
  }

}
