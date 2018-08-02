import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './devices.component';
import { DevicesRouting } from './devices.routing';
import { AllDevicesComponent } from './all-devices/all-devices.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';
import { DevicesService } from './devices.service';
import { FilterDevicesPipe } from './filter-devices.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [DevicesComponent, AllDevicesComponent, MyDevicesComponent, FilterDevicesPipe],
    imports: [CommonModule, DevicesRouting, FormsModule],
    exports: [DevicesRouting],
    providers: [DevicesService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DevicesModule { }
