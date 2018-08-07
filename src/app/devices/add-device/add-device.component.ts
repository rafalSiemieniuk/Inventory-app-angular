import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DevicesService } from '../devices.service';


@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  data = <any>{};

  @ViewChild('nameEdit') nameEdit: ElementRef;
  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.data.name = this.nameEdit.nativeElement.value;
    this.devicesService.addNewDevice(this.data).subscribe();
  }
}
