import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './devices.component';
import { AdminGuard } from '../admin.guard';
import { AllDevicesComponent } from './all-devices/all-devices.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';
import { DevicesDetailsComponent } from './devices-details/devices-details.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';



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
                path: 'mydevices/:details',
                canActivate: [AdminGuard],
                component: DevicesDetailsComponent
            },
            {
                path: 'mydevices/:details/edit',
                canActivate: [AdminGuard],
                component: EditDeviceComponent
            },
            {
                path: 'alldevices',
                canActivate: [AdminGuard],
                component: AllDevicesComponent,
            },
            {
                path: 'alldevices/add',
                canActivate: [AdminGuard],
                component: AddDeviceComponent
            },
            {
                path: 'alldevices/:details',
                canActivate: [AdminGuard],
                component: DevicesDetailsComponent
            },
            {
                path: 'alldevices/:details/edit',
                canActivate: [AdminGuard],
                component: EditDeviceComponent
            },
            

        ]
    }];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(devicesRoutes)],
    exports: [RouterModule]
})
export class DevicesRouting { }
