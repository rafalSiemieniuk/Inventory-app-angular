import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IdentifyDetailsService} from '../identify-details.service';

@Component({
  selector: 'app-identify-detail-place',
  templateUrl: './identify-detail-place.component.html',
  styleUrls: ['./identify-detail-place.component.scss']
})
export class IdentifyDetailPlaceComponent implements OnInit {
  place;
  office;

  @Input() set value(v) {
    this.setPlace(v);
  }

  constructor(private route: ActivatedRoute, private service: IdentifyDetailsService) {
  }

  ngOnInit() {
  }

  setPlace(place) {
    this.place = place;
    this.getOffice(place.officeId);
  }

  getOffice(officeId) {
    this.service.getOffice(officeId).subscribe(office =>
      this.office = office);
  }
}
