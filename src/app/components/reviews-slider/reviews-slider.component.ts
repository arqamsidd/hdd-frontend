import { Component, ViewEncapsulation , OnInit } from '@angular/core';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual, SwiperOptions } from 'swiper';
import { BehaviorSubject } from 'rxjs';

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);


@Component({
  selector: 'app-reviews-slider',
  templateUrl: './reviews-slider.component.html',
  styleUrls: ['./reviews-slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewsSliderComponent implements OnInit {
  config: SwiperOptions = {
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      400: {
        slidesPerView: 2,
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
  slides$ = new BehaviorSubject<string[]>(['']);
  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`)
    );
  }

}
