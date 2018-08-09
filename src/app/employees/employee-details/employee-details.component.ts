import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeesService} from '../employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employee;
  devices;

  constructor(private route: ActivatedRoute, private employeeService: EmployeesService) { }

  ngOnInit() {
    this.employeeService.getEmployee(this.route.snapshot.params.id)
      .subscribe(employee =>{
        this.employee = employee;
        this.getDevices(employee.id);
      });
  }
  getDevices(employeeId){
    this.employeeService.getDevices().subscribe(devices => {
      this.devices = devices.filter(item => item.belongsToId === employeeId);
      }
    );
  }

}
