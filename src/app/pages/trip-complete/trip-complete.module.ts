import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripCompletePageRoutingModule } from './trip-complete-routing.module';

import { TripCompletePage } from './trip-complete.page';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripCompletePageRoutingModule,
   
  ],
  declarations: [TripCompletePage]
})
export class TripCompletePageModule {}
