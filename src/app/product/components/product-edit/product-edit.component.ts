import { Observable } from 'rxjs/Observable';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, // to read ":id"
          Router } from '@angular/router';
import { Brand } from '../../models/brand';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product(); // create/edit
  cloneProduct: Product;
  
  brands$: Observable<Brand[]>;

  @ViewChild("productForm")
  form: NgForm;

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log("ID ", id);
    if (id) {
      this.productService.getProduct(id)
          .subscribe( product => {
            this.product = product;
            this.cloneProduct = Object.assign({}, this.product);
          });
    }

    this.brands$ = this.productService.getBrands();
  }

  saveProduct() {

    if (this.form.invalid) {
      alert("invalid form");
      return;
    }

    this.productService
        .saveProduct(this.product)
        .subscribe ( savedProduct => {
            // option1: continue with form
            console.log("product saved ", savedProduct);
            this.product = savedProduct;
            this.cloneProduct = Object.assign({}, this.product);

            // clear dirty field, touched state
            this.form.reset(this.product);
            
            // option 2: go to list page
             this.router.navigateByUrl("/products/list");
        });
  }

}
