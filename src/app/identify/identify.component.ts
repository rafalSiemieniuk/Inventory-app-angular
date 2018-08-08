import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.scss']
})
export class IdentifyComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
