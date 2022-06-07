import { Component, OnInit } from '@angular/core';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-single-shop-product-card',
  templateUrl: './single-shop-product-card.component.html',
  styleUrls: ['./single-shop-product-card.component.css']
})
export class SingleShopProductCardComponent implements OnInit {
  cartQty = 1;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  incrementCart(){
    this.cartQty++;
  }

  decrementCart(){
    this.cartQty--;
  }

  quickView(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  


}
