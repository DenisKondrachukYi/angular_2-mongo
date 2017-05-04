import { NgModule } from '@angular/core';
import {ProductComponent} from "./product.component";
import {routing} from "./product.routing";

@NgModule({
  imports: [
    routing
  ],
  declarations: [ProductComponent]
})
export default class ProductPageModule { }
