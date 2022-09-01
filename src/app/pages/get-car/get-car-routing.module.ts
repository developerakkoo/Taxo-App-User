import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetCarPage } from './get-car.page';

const routes: Routes = [
  {
    path: '',
    component: GetCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetCarPageRoutingModule {}
