import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../model/ProductDetail.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private service: ProductService, private activatedRoute: ActivatedRoute) { }

  productDetail: ProductDetail;
  productId: string | null;
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProductDetail();
  }

  getProductDetail() {
    this.service.getProductDetails(this.productId!).subscribe((data: any) => {
      this.productDetail = data;
    })
  }
}
