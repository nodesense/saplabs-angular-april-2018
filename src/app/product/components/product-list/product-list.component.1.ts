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

  products: Product[] = [];

  subscription: Subscription;

  // Angular creates PRoductService object if already not created
  // inject into productlist component
  constructor(private productService: ProductService) { 
      console.log("Product List created");
  }


  fetchProducts() {
     this.subscription =  this.productService.getProducts()
          .subscribe ( products => {
            this.products = products;
            console.log("got products ", products);
          });
  }

  // called by ngFor
  trackByProductId(index: number, product: Product): number {
    console.log("track ", index, product.id);
    return product.id;
  }


  ngOnInit() {
    this.fetchProducts();
  }

  // called by angular, before deleting component
  ngOnDestroy() {
    console.log("product list destroy ");
    // abort the socket connection
    this.subscription.unsubscribe();
  }

}
