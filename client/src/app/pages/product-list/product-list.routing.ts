import { Routes, RouterModule }  from '@angular/router';
import {ProductListComponent} from "./product-list.component";
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }
];
export const routing = RouterModule.forChild(routes);
