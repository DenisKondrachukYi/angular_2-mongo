import { Routes, RouterModule }  from '@angular/router';
import {PagesComponent} from "./pages.component";
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'product-list', pathMatch: 'full' },
      { path: 'product-list', loadChildren: './product-list/product-list.module'},
      { path: 'product-page', loadChildren: './product-page/product-page.module'},
      { path: 'add-product', loadChildren: './add-product/add-product.module'},
      { path: '**', redirectTo: 'product-list'},
    ]
  }
];
export const routing = RouterModule.forChild(routes);
