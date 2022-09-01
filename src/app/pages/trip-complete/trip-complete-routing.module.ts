import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripCompletePage } from './trip-complete.page';

const routes: Routes = [
  {
    path: '',
    component: TripCompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripCompletePageRoutingModule {}
