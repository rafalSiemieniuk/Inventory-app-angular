import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss']
})
export class EditDeviceComponent implements OnInit {
  device = <any>{};

  @ViewChild('nameEdit') nameEdit: ElementRef;
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
    this.device.name = this.nameEdit.nativeElement.value;
    this.devicesService.editDevice(this.device).subscribe();
  }
}
