import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {


  cartQty = 1;

  slideConfig = {
    dots: false,
    infinite: false,
    arrows: true,
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
    // nextArrow: '<div class=\'nav-slider-button\'></div>',
    // prevArrow: '<div class=\'nav-slider-button\'></div>',
    speed: 300,
    slidesToShow: 4,
    asNavFor: '#slider',
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipe: true,
    //  centerMode: true,
    focusOnSelect: true,
  };

  images = [
    {src: "/assets/prod/1.png"},
    {src: "/assets/prod/1.png"},
    {src: "/assets/prod/1.png"},
    {src: "/assets/prod/1.png"},
    {src: "/assets/prod/1.png"},
    {src: "/assets/prod/1.png"},
    {src: "/assets/prod/1.png"},
    {src: "/assets/prod/1.png"},
    {src: "/assets/prod/1.png"}

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
