import { Component, OnInit } from '@angular/core';
import {
  ComponentRef,
  ViewChild,
  Params,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import * as ons from 'onsenui';

@Component({
  selector: 'app-my-devices',
  templateUrl: './my-devices.component.html',
  styleUrls: ['./my-devices.component.scss']
})
export class MyDevicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showQrCode(code) {
    alert(code);
  }
}

