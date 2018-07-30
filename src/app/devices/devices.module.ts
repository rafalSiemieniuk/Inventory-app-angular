import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './devices.component';
import { DevicesRouting } from './devices.routing';



@NgModule({
    declarations: [DevicesComponent],
    imports: [CommonModule, DevicesRouting],
    exports: [DevicesRouting],
    providers: [],
})
export class DevicesModule { }
