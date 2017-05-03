import { NgModule } from '@angular/core';
import {AddProductComponent} from "./add-product.component";
import {CommonModule} from "@angular/common";
import {routing} from "./add-product.routing";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [AddProductComponent]
})
export default class addProductModule { }
