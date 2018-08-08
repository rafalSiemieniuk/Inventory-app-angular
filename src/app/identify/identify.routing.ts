import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {IdentifyComponent} from './identify.component';
import {IdentifyDetailsComponent} from './identify-details/identify-details.component';
import {IdentifyQrComponent} from './identify-qr/identify-qr.component';
import {IdentifyDetailDeviceComponent} from './identify-details/identify-detail-device/identify-detail-device.component';
import {IdentifyDetailPlaceComponent} from './identify-details/identify-detail-place/identify-detail-place.component';
import {IdentifyDetailEmployeeComponent} from './identify-details/identify-detail-employee/identify-detail-employee.component';
import {IdentifyDetailOfficeComponent} from './identify-details/identify-detail-office/identify-detail-office.component';

const identifyRoutes: Routes = [
  {
    path: '',
    component: IdentifyComponent,
    children: [
      {
        path: 'identifyqr',
        component: IdentifyQrComponent
      }, {
        path: 'details',
        component: IdentifyDetailsComponent
      }, {
        path: 'details/user/:id',
        component: IdentifyDetailEmployeeComponent
      }, {
        path: 'details/device/:id',
        component: IdentifyDetailDeviceComponent
      }, {
        path: 'details/office/:id',
        component: IdentifyDetailOfficeComponent
      }, {
        path: 'details/place/:id',
        component: IdentifyDetailPlaceComponent
      }, {
        path: 'details/:id',
        component: IdentifyDetailsComponent
      }, {
        path: '',
        redirectTo: 'identifyqr',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(identifyRoutes)
  ],
  exports: [RouterModule]
})
export class IdentifyRouting {
}
