import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './devices.component';
import { FormsModule } from '@angular/forms';
import { FilterDevicesPipe } from './filter-devices.pipe';
import { DevicesService } from './devices.service';

@NgModule({
    declarations: [DevicesComponent, AllDevicesComponent, MyDevicesComponent, FilterDevicesPipe],
    imports: [CommonModule, DevicesRouting, FormsModule],
    declarations: [DevicesComponent, AllDevicesComponent, MyDevicesComponent, QrcodeReaderComponent],
    exports: [DevicesRouting],
    providers: [DevicesService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DevicesModule { }
