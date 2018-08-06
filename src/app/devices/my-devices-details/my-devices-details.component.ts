import { Component, OnInit } from '@angular/core';
import {
  ComponentRef,
  ViewChild,
  Params,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as ons from 'onsenui';


@Component({
  selector: 'app-my-devices-details',
  templateUrl: './my-devices-details.component.html',
  styleUrls: ['./my-devices-details.component.scss']
})
export class MyDevicesDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showQrCode(code) {
    alert(code);
  }
}
