import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './devices.component';
import { DevicesRouting } from './devices.routing';
import { AllDevicesComponent } from './all-devices/all-devices.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';



@NgModule({
    declarations: [DevicesComponent, AllDevicesComponent, MyDevicesComponent],
    imports: [CommonModule, DevicesRouting],
    exports: [DevicesRouting],
    providers: [],
})
export class DevicesModule { }
