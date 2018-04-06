import { Brand } from './../models/brand';
import { environment } from './../../../environments/environment';

import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Observable} from "rxjs/Observable";
import { Product } from '../models/product';

console.log("ENV ", environment)

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { 
      console.log("Product Service created");
  }

  // async/ajax
  getProducts(): Observable<Product[]> {
     return this.http
                .get<Product[]> (`${environment.apiEndPoint}/api/products`);
  }

  // GET /api/products/123
  getProduct(id: any): Observable<Product>  {
    return this.http
    .get<Product> (`${environment.apiEndPoint}/api/products/${id}`);
  }

   // DELETE /api/products/123
   deleteProduct(id: any): Observable<any>  {
    return this.http
    .delete<any> (`${environment.apiEndPoint}/api/products/${id}`);
  }

  // CREATE (no id)
  // POST /api/products
  // {{json data}}
  
  // server returns product data with id

  // UPDATE EXISTING DATA (with id)
  // PUT /api/products/1234
  // {{json data}}
  
  // server returns product data with id
  
  saveProduct(product: Product): Observable<Product>  {
    if (product.id) { // PUT
      return this.http
             .put<Product> (`${environment.apiEndPoint}/api/products/${product.id}`,
                            product
                          );
    } else { // POST
      return this.http
      .post<Product> (`${environment.apiEndPoint}/api/products`,
                      product
                    );
    } 
  }

  getBrands(): Observable<Brand[]> {
    return this.http
               .get<Brand[]> (`${environment.apiEndPoint}/api/brands`);
 }

}
