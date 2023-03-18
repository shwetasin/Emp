import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpDataPage } from './emp-data.page';

const routes: Routes = [
  {
    path: '',
    component: EmpDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpDataPageRoutingModule {}
