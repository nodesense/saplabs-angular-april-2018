import { ProductService } from './services/product.service';
 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';

import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    component: ProductHomeComponent,

    // nested navigation
    children: [
      {
        path: 'list', // url is /products/list
        component: ProductListComponent
      },
      {
        path: 'create',
        component: ProductEditComponent
      },
      {
        path: 'edit/:id', // products/edit/3456
        component: ProductEditComponent
      },
      {
        path: 'search',
        component: ProductSearchComponent
      }
    ]
  }
];

import {FormsModule, 
        ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
        ProductHomeComponent, 
        ProductListComponent, 
        ProductEditComponent, 
        ProductSearchComponent],

  providers: [
     // all services, dependency injection goes here
     ProductService
  ]
})
export class ProductModule { }
