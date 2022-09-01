import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

declare const google;
@Component({
  selector: 'app-trip-complete',
  templateUrl: './trip-complete.page.html',
  styleUrls: ['./trip-complete.page.scss'],
})
export class TripCompletePage implements OnInit{

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  center:any ={
    lat: 18.5247663,
    lng: 73.7929274,
  }





  constructor(private alertCtrl:AlertController) {

   }

  ngAfterViewInit(): void {
    this.createMap();
   }

   async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.google_maps_api_key,
      config: {
       center:this.center,
        zoom: 13,
      },
    });
  }

  ngOnInit() {
  }




// next(){
//   this.Readmore = !this.Readmore;
//   this.visible = !this.visible;
// }


}
