import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../devices.service';


@Component({
  selector: 'app-my-devices-details',
  templateUrl: './my-devices-details.component.html',
  styleUrls: ['./my-devices-details.component.scss']
})
export class MyDevicesDetailsComponent implements OnInit {
  device = null;
  constructor(private route: ActivatedRoute, private devicesService: DevicesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDevice(params.details);
    });
  }

  getDevice(deviceId) {
    this.devicesService.getById(deviceId).subscribe(item => {
      this.device = item;
    });
  }
  onSubmit() {

  }

}
