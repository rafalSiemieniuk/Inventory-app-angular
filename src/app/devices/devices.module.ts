import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './devices.component';
import { FormsModule } from '@angular/forms';
import { DevicesService } from './devices.service';
import { AllDevicesComponent } from './all-devices/all-devices.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';
import { DevicesRouting } from './devices.routing';
import { DevicesDetailsComponent } from './devices-details/devices-details.component';
import { SharedModule } from '../shared/shared.module';
import { AddDeviceComponent } from './add-device/add-device.component';

@NgModule({
    declarations: [DevicesComponent, AllDevicesComponent, MyDevicesComponent, DevicesDetailsComponent, AddDeviceComponent],
    imports: [CommonModule, DevicesRouting, FormsModule, SharedModule],
    exports: [DevicesRouting],
    providers: [DevicesService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DevicesModule { }
