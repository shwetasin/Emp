import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpCreatePage } from './emp-create.page';

const routes: Routes = [
  {
    path: '',
    component: EmpCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpCreatePageRoutingModule {}
