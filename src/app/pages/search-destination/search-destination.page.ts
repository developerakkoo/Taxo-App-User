import { Component, ElementRef,OnInit,  ViewChild,AfterViewInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { ModalController } from '@ionic/angular';
import { element } from 'protractor';
import { environment } from 'src/environments/environment';
import { SheetPage } from '../sheet/sheet.page';
declare const google;

@Component({
  selector: 'app-search-destination',
  templateUrl: './search-destination.page.html',
  styleUrls: ['./search-destination.page.scss'],
})
export class SearchDestinationPage implements OnInit {

searchTerm:string;
cities = [
  {
    city:'Pune,Maharashtra'
  },
  {
    city:'Pune City,Pune,Maharashtra'
  },
  {
    city:'Pune University'
  },

  {
    city:'Pune Airport Departure'
  },
  {
    city:'Pimpri Chichwad'
  },
  {
    city:'Nashik,Maharashtra'
  },
  {
    city:'Pune,Pimple Saudargar'
  },
  {
    city:'Pune,Corporation'
  },
  {
    city:'Pune,Chinchwad'
  }




];

  constructor(private modalCtrl:ModalController) { }


  ngOnInit() {
  }

  

  //   async add(){
  //   const modal = await this.modalCtrl.create({
  //     component:SheetPage,
  //     breakpoints:[0.2],
  //     initialBreakpoint: 0.2,
  //     handle: true,
  //   })
  //   await modal.present(); 
  // }




  

}
