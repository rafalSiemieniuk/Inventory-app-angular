import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './devices.component';
import { AdminGuard } from '../admin.guard';
import { AllDevicesComponent } from './all-devices/all-devices.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';
import { DevicesDetailsComponent } from './devices-details/devices-details.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { MyDevicesIdentifyComponent } from './my-devices-identify/my-devices-identify.component';
import { MyDevicesSummaryComponent } from './my-devices-summary/my-devices-summary.component';



const devicesRoutes: Routes = [
    {
        path: 'transfer/:details',
        component: MyDevicesIdentifyComponent
    },
    {
        path: 'transfer/:details/summary',
        component: MyDevicesSummaryComponent
    },
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
                component: DevicesDetailsComponent,
            },
            {
                path: 'mydevices/:details/form',
                canActivate: [AdminGuard],
                component: EditDeviceComponent
            },
            {
                path: 'alldevices',
                canActivate: [AdminGuard],
                component: AllDevicesComponent,
            },
            {
                path: 'alldevices/:details',
                canActivate: [AdminGuard],
                component: DevicesDetailsComponent
            },
            {
                path: 'alldevices/:details/form',
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
