import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared.module';
import { ComponentsModule } from '../components/components.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductIndustriesComponent } from './product-industries/product-industries.component';
import { ProductRelatedComponent } from './product-related/product-related.component';

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductIndustriesComponent,
    ProductRelatedComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    ComponentsModule,
  ]
})
export class ProductModule { }
