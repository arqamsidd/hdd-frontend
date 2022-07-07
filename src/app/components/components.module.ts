import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { HeroSliderComponent  } from './hero-slider/hero-slider.component';
import { ProductFinderComponent } from './product-finder/product-finder.component';
import { ReviewsSliderComponent } from './reviews-slider/reviews-slider.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { IndustriesSectionComponent } from './industries-section/industries-section.component';
import { DealsOfWeekComponent } from './deals-of-week/deals-of-week.component';
import { BuyNowCtaComponent } from './buy-now-cta/buy-now-cta.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ImageWithTextComponent } from './image-with-text/image-with-text.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { BrandsSliderComponent } from './brands-slider/brands-slider.component';
import { FullImageCtaComponent } from './full-image-cta/full-image-cta.component';
import { ProductAccessoriesComponent } from './product-accessories/product-accessories.component';



import { ProductCardSliderComponent } from './slider/product-card-slider/product-card-slider.component';
import { FirstProductCardSliderComponent } from './slider/first-product-card-slider/first-product-card-slider.component';


import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    HeroSliderComponent,
    ProductFinderComponent,
    ReviewsSliderComponent,
    BlogSectionComponent,
    FeaturedCategoriesComponent,
    IndustriesSectionComponent,   
    DealsOfWeekComponent,
    BuyNowCtaComponent,
    FeaturedProductsComponent,
    ImageWithTextComponent,
    CaseStudiesComponent,
    BrandsSliderComponent,
    FullImageCtaComponent,
    ProductCardSliderComponent,
    FirstProductCardSliderComponent,
    ProductAccessoriesComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [ 
    HeroSliderComponent,
    ProductFinderComponent,
    ReviewsSliderComponent,
    BlogSectionComponent,
    FeaturedCategoriesComponent,
    IndustriesSectionComponent,
    DealsOfWeekComponent,
    BuyNowCtaComponent,
    FeaturedProductsComponent,
    ImageWithTextComponent,
    CaseStudiesComponent,
    BrandsSliderComponent,
    FullImageCtaComponent,
    ProductCardSliderComponent,
    FirstProductCardSliderComponent,
    ProductAccessoriesComponent

  ]
})
export class ComponentsModule { }
