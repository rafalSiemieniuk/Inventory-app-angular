import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-identify-qr',
  templateUrl: './identify-qr.component.html',
  styleUrls: ['./identify-qr.component.scss']
})
export class IdentifyQrComponent implements OnInit {
  output;

  constructor() { }

  ngOnInit() {
    console.log(this.output);
  }
  shareQrCode(code){
    this.output = code;
  }

}
