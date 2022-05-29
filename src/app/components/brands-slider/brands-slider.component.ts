import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual, SwiperOptions } from 'swiper';
import { BehaviorSubject } from 'rxjs';

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-brands-slider',
  templateUrl: './brands-slider.component.html',
  styleUrls: ['./brands-slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BrandsSliderComponent implements OnInit {
  config: SwiperOptions = {
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    },
    centeredSlides: true,
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      300: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    },
    navigation: true,
    loop: true
  };
  constructor() { }
  ngOnInit(): void {
  }
}
