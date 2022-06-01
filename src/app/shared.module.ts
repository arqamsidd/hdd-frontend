import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    SwiperModule,
    NgbModule
  ],
  exports: [
    FormsModule,
    SwiperModule,
    NgbModule
  ],
  providers: []
})
export class SharedModule { }
