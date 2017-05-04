import { Injectable } from '@angular/core';
import {Product} from "./product.model";

const image = 'https://www.apple.com/v/macbook-pro/l/images/overview/og.png?201702231336'

@Injectable()
export class ProductService {

  public productsList: Array<Product> = []

  constructor() {
    this.setInitialProducts();
  }
  //TODO: for debug purpose
  public setInitialProducts() {
    for(let i = 0; i < 10; i++){
      const product = new Product(image, 'test title', 'test desription', i)
      this.productsList.push(product)
    }
  }

  createProduct() {

  }
}
