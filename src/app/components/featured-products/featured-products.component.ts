import { Component, ViewEncapsulation , OnInit } from '@angular/core';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual, SwiperOptions } from 'swiper';
import { BehaviorSubject } from 'rxjs';


SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);


@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

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
