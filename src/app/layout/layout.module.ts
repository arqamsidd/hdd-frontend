import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './header/header.component';
import { TopSmartSearchComponent } from './top-smart-search/top-smart-search.component';
import { TopCartComponent } from './top-cart/top-cart.component';
import { TopMainMenuComponent } from './top-main-menu/top-main-menu.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    TopSmartSearchComponent,
    TopCartComponent,
    TopMainMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    TopSmartSearchComponent,
    TopCartComponent,
    TopMainMenuComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
