import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpCreatePageRoutingModule } from './emp-create-routing.module';

import { EmpCreatePage } from './emp-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EmpCreatePageRoutingModule
  ],
  declarations: [EmpCreatePage]
})
export class EmpCreatePageModule {}
