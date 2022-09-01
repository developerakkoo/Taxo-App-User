import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-otp',
  templateUrl: './get-otp.component.html',
  styleUrls: ['./get-otp.component.scss'],
})
export class GetOtpComponent implements OnInit {

  otp:string;

  config = {
    length:6,
    allowNumbersOnly:true,
    inputClass: 'otp-input-style'
  }

  constructor() { }

  ngOnInit() {}

  onOtpChange(event){
   this.otp = event;
   console.log(this.otp);
   
  }

}
