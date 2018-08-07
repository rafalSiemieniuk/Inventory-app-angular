import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss']
})
export class EditDeviceComponent implements OnInit {
  params = null;

  constructor(private route: ActivatedRoute, private deviceService: DevicesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.params = params;
    });
  }

  onSubmit() {

  }

}
