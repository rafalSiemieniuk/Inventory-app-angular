import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {IdentifyComponent} from './identify.component';
import {IdentifyDetailsComponent} from './identify-details/identify-details.component';
import {IdentifyQrComponent} from './identify-qr/identify-qr.component';

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
        path: '',
        redirectTo: 'identifyqr',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(identifyRoutes)],
  exports: [RouterModule]
})
export class IdentifyRouting {
}
