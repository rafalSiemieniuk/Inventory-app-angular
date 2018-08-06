import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-devices-details',
  templateUrl: './my-devices-details.component.html',
  styleUrls: ['./my-devices-details.component.scss']
})
export class MyDevicesDetailsComponent implements OnInit {
  device: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.device = params.details;
    });
  }

}
