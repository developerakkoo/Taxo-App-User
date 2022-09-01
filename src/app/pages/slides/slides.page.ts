import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import SwiperCore, {SwiperOptions, Pagination, Scrollbar, Navigation, A11y} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
// declare var document;
@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  @ViewChild('slides' , {static: true}) slides:IonSlides;


  option:SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    // centerSlides: true,
    // loop: true,
    // autoplay:true,
    // pagination: {clickable:true},
    // scrollbar: {draggable:true},
  };
  constructor() { }

  ngOnInit() {

  }

  goNext(){
    this.slides.slideNext();
  }





}
