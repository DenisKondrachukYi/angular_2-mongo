import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../services/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  modalShow : boolean

  public productsList: Array<Product>

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.fillProductsList()
  }

  fillProductsList(){
    this.productsList = this.productService.productsList.slice()
  }

  modalShows(product: Product) {
    this.modalShow = true
  }

}
