import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { ReviewsSliderComponent } from './components/reviews-slider/reviews-slider.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { FeaturedCategoriesComponent } from './components/featured-categories/featured-categories.component';
import { IndustriesSectionComponent } from './components/industries-section/industries-section.component';
import { DealsOfWeekComponent } from './components/deals-of-week/deals-of-week.component';
import { BuyNowCtaComponent } from './components/buy-now-cta/buy-now-cta.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductFinderComponent } from './components/product-finder/product-finder.component';
import { HeaderComponent } from './layout/header/header.component';
import { ImageWithTextComponent } from './components/image-with-text/image-with-text.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { BrandsSliderComponent } from './components/brands-slider/brands-slider.component';
import { FullImageCtaComponent } from './components/full-image-cta/full-image-cta.component';

import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopCartComponent } from './layout/top-cart/top-cart.component';
import { TopSmartSearchComponent } from './layout/top-smart-search/top-smart-search.component';
import { TopMainMenuComponent } from './layout/top-main-menu/top-main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeroSliderComponent,
    ReviewsSliderComponent,
    BlogSectionComponent,
    FeaturedCategoriesComponent,
    IndustriesSectionComponent,
    DealsOfWeekComponent,
    BuyNowCtaComponent,
    FeaturedProductsComponent,
    ProductFinderComponent,
    HeaderComponent,
    ImageWithTextComponent,
    CaseStudiesComponent,
    BrandsSliderComponent,
    FullImageCtaComponent,
    TopCartComponent,
    TopSmartSearchComponent,
    TopMainMenuComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
