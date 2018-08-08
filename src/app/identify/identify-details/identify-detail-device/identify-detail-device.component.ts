import {Component, OnInit} from '@angular/core';
import {IdentifyDetailsService} from '../identify-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-identify-detail-device',
  templateUrl: './identify-detail-device.component.html',
  styleUrls: ['./identify-detail-device.component.scss']
})
export class IdentifyDetailDeviceComponent implements OnInit {
  device;
  user;
  place;

  constructor(private route: ActivatedRoute, private service: IdentifyDetailsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getDevice(params.id).subscribe(item => (
          this.device = item,
            this.checkOwner(item.belongsToId)
        )
      );
    });
  }

  checkOwner(id) {
    this.service.getObject(id).subscribe(object => {
        if (object.objectType === 'user') {
          this.user = object.user;
        } else {
          this.place = object.place;
        }
      }
    );

  }
}
