import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {

  
  Readmore:boolean = true;

  visible:boolean = false;

  constructor() { }

  ngOnInit() {}

  onclick(){
    this.Readmore = !this.Readmore;
    this.visible = !this.visible;
}

next(){
  this.Readmore = !this.Readmore;
  this.visible = !this.visible;
}

}
