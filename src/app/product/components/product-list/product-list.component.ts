import { Observable } from 'rxjs/Observable';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs/Subscription';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products$: Observable<Product[]>;


  selectedField: string;
  predicate: string; // >,  <, =
  expectedValue: any;

  sortField: string;

  // Angular creates PRoductService object if already not created
  // inject into productlist component
  constructor(private productService: ProductService) { 
      console.log("Product List created");
  }


  fetchProducts() {
     this.products$ = this.productService.getProducts();
  }

  // called by ngFor
  trackByProductId(index: number, product: Product): number {
    //console.log("track ", index, product.id);
    return product.id;
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id)
        .subscribe ( () => {
            // refresh after delete
            this.fetchProducts();
        });
  }


  ngOnInit() {
    this.fetchProducts();
  }

  ngOnDestroy() {
    
  }
 

}
