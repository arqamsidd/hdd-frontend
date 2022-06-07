import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule } from '@angular-slider/ngx-slider';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    SwiperModule,
    NgbModule,
    NgxSliderModule
  ],
  exports: [
    FormsModule,
    SwiperModule,
    NgbModule,
    NgxSliderModule
  ],
  providers: []
})
export class SharedModule { }
