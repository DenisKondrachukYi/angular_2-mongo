import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: './pages/pages.module' },
];
export const routing = RouterModule.forRoot(routes, { useHash: false });
