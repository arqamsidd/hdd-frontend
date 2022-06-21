import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {


  cartQty = 1;

  slideConfig = {
    dots: true,
    infinite: false,
    arrows: false,
    // nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    // prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    speed: 300,
    slidesToShow: 1,
    nav: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipe: true,
  };

  slideConfigNav = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    rows: 1,
    slidesPerRow: 4,
    asNavFor: '#slider',
    slidesToScroll: 1,
    adaptiveHeight: false,
    swipe: true,
    focusOnSelect: true,
  };


  images = [
    {src: "/assets/prod/1.png"},
    {src: "/assets/prod/2.jpg"},
    {src: "/assets/prod/3.jpg"},
    {src: "/assets/prod/4.jpg"},
    {src: "/assets/prod/5.jpg"},
    {src: "/assets/prod/6.png"}

  ]

  constructor() { }

  

  ngOnInit(): void {
   
  }
  incrementCart(){
    this.cartQty++;
  }

  decrementCart(){
    this.cartQty--;
  }

  openLightBox(index = 0): void {
    // console.log(index);
    //this.lightbox.open(this.images, index);
  }
}
