import {Component, Input, OnInit} from '@angular/core';
import {IdentifyDetailsService} from '../identify-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-identify-detail-employee',
  templateUrl: './identify-detail-employee.component.html',
  styleUrls: ['./identify-detail-employee.component.scss']
})
export class IdentifyDetailEmployeeComponent implements OnInit {
  employee;
  office;
  admin;

  @Input() set value(v) {
    this.setUser(v);
  }

  constructor(private route: ActivatedRoute, private service: IdentifyDetailsService) {
  }

  ngOnInit() {
  }

  setUser(employee) {
    this.employee = employee;
    this.getOffice(employee.officeId);
  }

  getOffice(officeId) {
    this.service.getOffice(officeId).subscribe(office =>
      this.office = office);
  }
}
