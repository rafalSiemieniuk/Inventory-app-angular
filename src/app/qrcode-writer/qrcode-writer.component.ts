import {Component, Input, OnInit} from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qrcode-writer',
  templateUrl: './qrcode-writer.component.html',
  styleUrls: ['./qrcode-writer.component.scss']
})
export class QrcodeWriterComponent implements OnInit {

  url = null;
  content = 'I am a pony';

  // @Input() scaleqr; <--przyda się do zmiany w innych komponentach
  scaleqr = 5;
  opts = {
    scale: this.scaleqr,
  };

  constructor() { }

  ngOnInit() {
    QRCode.toDataURL(this.content, this.opts)
      .then(url => {
        this.url = url;
      })
      .catch(err => {
        console.error(err);
      });

  }
}
