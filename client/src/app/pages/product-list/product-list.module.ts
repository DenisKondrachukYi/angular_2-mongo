import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProductListComponent} from "./product-list.component";
import {routing} from "./product-list.routing";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ProductListComponent]
})
export default class productListModule { }
