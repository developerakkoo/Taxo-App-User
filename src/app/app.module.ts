import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { GetOtpComponent } from './pages/get-otp/get-otp.component';
import { PopupComponent } from './pages/popup/popup.component';
// import { IonicRatingComponentModule } from 'ionic-rating-component';


@NgModule({
  declarations: [AppComponent,GetOtpComponent,PopupComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgOtpInputModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
