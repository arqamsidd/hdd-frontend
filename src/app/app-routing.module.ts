import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module')
      .then(m => m.CategoryModule),
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module')
      .then(m => m.ProductModule),
  },
  // {
  //   path: 'category',
  //   loadChildren: () => import('./category/category.module')
  //     .then(m => m.CategoryModule),
  // },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
