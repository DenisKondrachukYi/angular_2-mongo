import { Routes, RouterModule }  from '@angular/router';
import {ProductComponent} from "./product.component";
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ProductComponent

  }
];
export const routing = RouterModule.forChild(routes);
