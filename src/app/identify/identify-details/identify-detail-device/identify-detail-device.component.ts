import {Component, Input, OnInit} from '@angular/core';
import {IdentifyDetailsService} from '../identify-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-identify-detail-device',
  templateUrl: './identify-detail-device.component.html',
  styleUrls: ['./identify-detail-device.component.scss']
})
export class IdentifyDetailDeviceComponent implements OnInit {
  device;
  owner;
  ownerType;

  @Input() set value(v) {
    this.setDevice(v);
  }

  constructor(private route: ActivatedRoute, private service: IdentifyDetailsService) {
  }

  ngOnInit() {
  }

  setDevice(device) {
    this.device = device;
    this.getOwner(device.belongsToId);
  }

  getOwner(id) {
    this.service.getObject(id).subscribe(object => {
        this.owner = object[object.objectType];
        this.ownerType = object.objectType;
      }
    );
  }
}
