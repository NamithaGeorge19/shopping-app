import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDetail } from './model/ProductDetail.model';
import { Product } from './model/Product.model';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  constructor(private http: HttpClient) { }

  apiURL: string = 'http://localhost:21167/api';

  getProducts() {
    return this.http.get(`${this.apiURL}/product`);
  }

  getProductDetails(id: string) {
    return this.http.get(`${this.apiURL}/Product/${id}`);
  }

  insertProduct(product: ProductDetail) {

  }

  updateProduct() {

  }

  deleteProduct() {

  }
}
