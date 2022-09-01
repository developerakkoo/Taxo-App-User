import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleMap } from '@capacitor/google-maps';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { SheetPage } from '../sheet/sheet.page';


@Component({
  selector: 'app-get-car',
  templateUrl: './get-car.page.html',
  styleUrls: ['./get-car.page.scss'],
})
export class GetCarPage implements OnInit {

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  center:any ={
    lat: 18.5247663,
    lng: 73.7929274,
  }
  // modalctrl: any;

  constructor(private modalctrl:ModalController, private router:Router) { 
    // setTimeout(()=>{
    //   this.router.navigateByUrl('sheet');
    // },3000);
   }

  ngOnInit() {
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

  // async add(){
  //   const modal = await this.modalctrl.create({
  //     component:SheetPage,
  //     breakpoints:[0.4],
  //     initialBreakpoint: 0.4,
  //     handle: true,
  //     backdropBreakpoint: 0.4

  //   })
  //   await modal.present(); 
  // }

  async add(){
    const sheet = {
      component:SheetPage,
      cssClass: 'custom-modal',
    };
    const modal = await this.modalctrl.create(sheet);
    await modal.present();
  }

}
