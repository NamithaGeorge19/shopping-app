import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private service: ProductService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts() {
    this.service.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    })
  }
}
