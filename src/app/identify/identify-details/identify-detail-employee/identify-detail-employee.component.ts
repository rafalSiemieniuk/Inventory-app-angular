import {Component, OnInit} from '@angular/core';
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

  constructor(private route: ActivatedRoute, private service: IdentifyDetailsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getUser(params.id).subscribe(item => {
        this.employee = item;
        this.service.getOffice(item.officeId).subscribe(office =>
          this.office = office);
        if (item.isAdmin) {
          this.admin = 'yes';
        } else {
          this.admin = 'no';
        }
      });
    });
  }

}
