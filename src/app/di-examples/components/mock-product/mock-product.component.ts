import { Component, OnInit } from '@angular/core';
import {Product} from '../services/product-model';
import {ProductService} from '../services/product-service';
import {MockProductService} from '../services/mock-product-service';

@Component({
  selector: 'app-di-mock-product',
  templateUrl: './mock-product.component.html',
  styleUrls: ['./mock-product.component.scss'],
  providers: [{provide: ProductService, useClass: MockProductService}]
})
export class MockProductComponent implements OnInit {
  product: Product;

  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }

  ngOnInit(): void {
  }

}
