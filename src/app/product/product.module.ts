import { SaveAlertGuard } from './guards/save-alert.guard';
import { CanEditGuard } from './guards/can-edit.guard';
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
    // path: 'products',
    path: '', // for lazy loading, since products comes from app module
    component: ProductHomeComponent,

    // nested navigation
    children: [
      {
        path: 'list', // url is /products/list
        component: ProductListComponent
      },
      {
        path: 'create',
        component: ProductEditComponent,
        canActivate: [CanEditGuard],
        canDeactivate: [SaveAlertGuard]
      },
      {
        path: 'edit/:id', // products/edit/3456
        component: ProductEditComponent,
        canActivate: [CanEditGuard],
        canDeactivate: [SaveAlertGuard]
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
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
        ProductHomeComponent, 
        ProductListComponent, 
        ProductEditComponent, 
        ProductSearchComponent],

  providers: [
     // all services, dependency injection goes here
     ProductService,
     CanEditGuard, // entry guard
     SaveAlertGuard // exit guard
  ]
})
export class ProductModule { }
