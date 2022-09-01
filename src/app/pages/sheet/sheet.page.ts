import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.page.html',
  styleUrls: ['./sheet.page.scss'],
})
export class SheetPage implements OnInit {

  constructor( private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  color(){
    document.getElementsByClassName('img1')
  }



}
