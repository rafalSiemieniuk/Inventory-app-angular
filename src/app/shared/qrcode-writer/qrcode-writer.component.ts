import { Component, Input, OnInit } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qrcode-writer',
  templateUrl: './qrcode-writer.component.html',
  styleUrls: ['./qrcode-writer.component.scss']
})
export class QrcodeWriterComponent implements OnInit {

  url = null;

  @Input() scaleqr;

  @Input()
  set code(value) {
    if (value) {
      this.generateQR(value);
    }
  }

  constructor() { }

  ngOnInit() {


  }
  generateQR(code) {
    QRCode.toDataURL(code, {
      scale: this.scaleqr || 5,
      margin: 0,
    })
      .then(url => {
        this.url = url;
      })
      .catch(err => {
        console.error(err);
      });
  }
}
