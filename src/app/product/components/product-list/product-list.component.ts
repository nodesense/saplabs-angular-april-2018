import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  // Angular creates PRoductService object if already not created
  // inject into productlist component
  constructor(private productService: ProductService) { 
      console.log("Product List created");
  }


  fetchProducts() {
      this.productService.getProducts()
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

}
