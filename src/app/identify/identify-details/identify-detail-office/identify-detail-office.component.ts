import {Component, Input, OnInit} from '@angular/core';
import {IdentifyDetailsService} from '../identify-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-identify-detail-office',
  templateUrl: './identify-detail-office.component.html',
  styleUrls: ['./identify-detail-office.component.scss']
})
export class IdentifyDetailOfficeComponent implements OnInit {
  office;

  @Input() set value(v) {
    this.office = v;
  }

  constructor() {
  }

  ngOnInit() {
  }
}
