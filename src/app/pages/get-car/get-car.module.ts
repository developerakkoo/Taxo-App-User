import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetCarPageRoutingModule } from './get-car-routing.module';

import { GetCarPage } from './get-car.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetCarPageRoutingModule
  ],
  declarations: [GetCarPage]
})
export class GetCarPageModule {}
