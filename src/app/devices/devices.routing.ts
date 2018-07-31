import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './devices.component';
import { AdminGuard } from '../admin.guard';
import { AllDevicesComponent } from './all-devices/all-devices.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';



const devicesRoutes: Routes = [
    {
        path: '',
        component: DevicesComponent,
        children: [
            {
                path: 'mydevices',
                component: MyDevicesComponent,
            },
            {
                path: 'alldevices',
                canActivate: [AdminGuard],
                component: AllDevicesComponent,
            }
        ]
    }];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(devicesRoutes)],
    exports: [RouterModule]
})
export class DevicesRouting { }
