import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../services/product.model";

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.css']
})
export class ProductBlockComponent {

  @Output() onDeleteClick: EventEmitter<Product> = new EventEmitter()
  @Input() product: Product

  onDelete(product) {
    this.onDeleteClick.emit(product)
  }
}
