import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'emp-dashboard',
    loadChildren: () => import('./emp-dashboard/emp-dashboard.module').then( m => m.EmpDashboardPageModule)
  },
  {
    path: 'emp-create',
    loadChildren: () => import('./emp-create/emp-create.module').then( m => m.EmpCreatePageModule)
  },
  {
    path: 'emp-data/:id',
    loadChildren: () => import('./emp-data/emp-data.module').then( m => m.EmpDataPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
