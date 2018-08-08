import {Component, OnInit} from '@angular/core';
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

  constructor(private route: ActivatedRoute, private service: IdentifyDetailsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getPlace(params.id).subscribe(item => {
          this.place = item;
          this.service.getOffice(item.officeId).subscribe(office =>
            this.office = office);
        }
      );
    });
  }
}
