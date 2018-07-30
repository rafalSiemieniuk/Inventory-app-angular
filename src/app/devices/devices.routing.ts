import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './devices.component';



const devicesRoutes: Routes = [
    {
        path: '',
        component: DevicesComponent
    }];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(devicesRoutes)],
    exports: [RouterModule]
})
export class DevicesRouting { }
