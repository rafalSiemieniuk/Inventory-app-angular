import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../devices.service';
import { AuthService } from '../../core/auth.service';


@Component({
  selector: 'app-devices-details',
  templateUrl: './devices-details.component.html',
  styleUrls: ['./devices-details.component.scss']
})
export class DevicesDetailsComponent implements OnInit {
  device = null;
  user = null;

  constructor(private route: ActivatedRoute, private devicesService: DevicesService,
    private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDevice(params.details);
    });
    this.authService.user.subscribe(user => {
      this.user = user;
    });
  }

  getDevice(deviceId) {
    this.devicesService.getById(deviceId).subscribe(item => {
      this.device = item;
    });
  }
}
