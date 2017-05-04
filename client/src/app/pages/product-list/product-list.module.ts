import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProductListComponent} from "./product-list.component";
import {routing} from "./product-list.routing";
import {ProductBlockComponent} from "./product-block/product-block.component";
import {ModalModule} from "../../components/index";

@NgModule({
  imports: [
    CommonModule,
    routing,
    ModalModule
  ],
  declarations: [ProductListComponent, ProductBlockComponent],
})
export default class ProductListModule {
}
