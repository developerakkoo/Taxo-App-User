import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDestinationPageRoutingModule } from './search-destination-routing.module';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchDestinationPage } from './search-destination.page';
import { Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDestinationPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SearchDestinationPage]
})
export class SearchDestinationPageModule {}
