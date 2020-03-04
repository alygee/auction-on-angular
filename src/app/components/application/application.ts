import {Component, ViewEncapsulation} from '@angular/core';
import {Product, ProductService} from '../../services/product-service';

@Component({
  selector: 'app-auction-application',
  templateUrl: 'application.html',
  styleUrls: ['application.css'],
  encapsulation: ViewEncapsulation.None
})

export default class ApplicationComponent {
  products: Array<Product> = [];
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
