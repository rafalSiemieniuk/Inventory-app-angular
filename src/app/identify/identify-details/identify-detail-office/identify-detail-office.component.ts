import {Component, OnInit} from '@angular/core';
import {IdentifyDetailsService} from '../identify-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-identify-detail-office',
  templateUrl: './identify-detail-office.component.html',
  styleUrls: ['./identify-detail-office.component.scss']
})
export class IdentifyDetailOfficeComponent implements OnInit {
  office;

  constructor(private route: ActivatedRoute, private service: IdentifyDetailsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getOffice(params.id).subscribe(item => this.office = item
      );
    });
  }
}
