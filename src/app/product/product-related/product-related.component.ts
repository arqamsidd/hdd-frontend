import { Component, OnInit } from '@angular/core';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual, SwiperOptions } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-product-related',
  templateUrl: './product-related.component.html',
  styleUrls: ['./product-related.component.css']
})
export class ProductRelatedComponent implements OnInit {
  config: SwiperOptions = {
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 1,
      },
      300: {
        slidesPerView: 1,
      }
    },
    navigation: true,
    pagination: {
      clickable: true
    },
    loop: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
