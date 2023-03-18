import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EmpDataPageRoutingModule } from './emp-data-routing.module';

import { EmpDataPage } from './emp-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpDataPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EmpDataPage]
})
export class EmpDataPageModule {}
