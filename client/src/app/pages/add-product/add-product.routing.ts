import { Routes, RouterModule }  from '@angular/router';
import {AddProductComponent} from "./add-product.component";
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AddProductComponent
  }
];
export const routing = RouterModule.forChild(routes);
