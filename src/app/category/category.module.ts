import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared.module';
import { ComponentsModule } from '../components/components.module';
import { ListingComponent } from './listing/listing.component';
import { FilterCheckboxComponent } from './filter-checkbox/filter-checkbox.component';
import { FilterMultiSelectComponent } from './filter-multi-select/filter-multi-select.component';
import { FilterSimpleSelectComponent } from './filter-simple-select/filter-simple-select.component';
import { FilterTextInputComponent } from './filter-text-input/filter-text-input.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { TopBrandsComponent } from './top-brands/top-brands.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleShopProductCardComponent } from './single-shop-product-card/single-shop-product-card.component';
import { FilterSliderComponent } from './filter-slider/filter-slider.component';

@NgModule({
  declarations: [ListingComponent, FilterCheckboxComponent, FilterMultiSelectComponent, FilterSimpleSelectComponent, FilterTextInputComponent, TopCategoriesComponent, TopBrandsComponent, ProductListComponent, SingleShopProductCardComponent, FilterSliderComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    ComponentsModule,
  ]
})
export class CategoryModule { }
