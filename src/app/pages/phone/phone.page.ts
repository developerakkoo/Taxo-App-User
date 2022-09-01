import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import {} from '@ionic/angular';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {

  otp="";
  
  constructor(private platform: Platform, private loadingCtrl:LoadingController, private toastCtrl:ToastController) {
  }

  ngOnInit() {
  }

}
