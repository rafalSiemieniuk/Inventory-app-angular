import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './devices.component';
import { AdminGuard } from '../admin.guard';



const devicesRoutes: Routes = [
    {
        path: '',
        component: DevicesComponent,
        children: [
            {
                path: 'mydevices',
                component: DevicesComponent
            },
            {
                path: 'alldevices',
                canActivate: [AdminGuard],
                component: DevicesComponent
            }
        ]
    }];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(devicesRoutes)],
    exports: [RouterModule]
})
export class DevicesRouting { }
