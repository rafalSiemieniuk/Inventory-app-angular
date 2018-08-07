import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './devices.component';
import { AdminGuard } from '../admin.guard';
import { AllDevicesComponent } from './all-devices/all-devices.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';
import { DevicesDetailsComponent } from './devices-details/devices-details.component';
import { AddDeviceComponent } from './add-device/add-device.component';



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
            },
            {
                path: ':details',
                component: DevicesDetailsComponent,
            },
            {
                path: 'alldevices/add',
                canActivate: [AdminGuard],
                component: AddDeviceComponent
            },
          
        ]
    }];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(devicesRoutes)],
    exports: [RouterModule]
})
export class DevicesRouting { }
