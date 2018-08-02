import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './devices.component';
import { DevicesRouting } from './devices.routing';
import { AllDevicesComponent } from './all-devices/all-devices.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';
import { QrcodeReaderComponent } from '../qrcode-reader/qrcode-reader.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [DevicesComponent, AllDevicesComponent, MyDevicesComponent, QrcodeReaderComponent],
    imports: [CommonModule, DevicesRouting],
    exports: [DevicesRouting],
    providers: [],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
    ],
})
export class DevicesModule { }
