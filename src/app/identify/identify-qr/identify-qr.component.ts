import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-identify-qr',
  templateUrl: './identify-qr.component.html',
  styleUrls: ['./identify-qr.component.scss']
})
export class IdentifyQrComponent implements OnInit {
  private output;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  shareQrCode(code) {
    this.output = code;
    this.router.navigate(['/identify/details/' + this.output]);
  }

}
