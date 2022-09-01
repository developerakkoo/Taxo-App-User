import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDestinationPage } from './search-destination.page';

const routes: Routes = [
  {
    path: '',
    component: SearchDestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDestinationPageRoutingModule {}
