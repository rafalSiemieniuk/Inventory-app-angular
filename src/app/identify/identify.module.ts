import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IdentifyComponent} from './identify.component';
import {IdentifyQrComponent} from './identify-qr/identify-qr.component';
import {IdentifyDetailsComponent} from './identify-details/identify-details.component';
import {CommonModule} from '@angular/common';
import {IdentifyRouting} from './identify.routing';
import {SharedModule} from '../shared/shared.module';
import {IdentifyDetailsService} from './identify-details/identify-details.service';
import {IdentifyDetailDeviceComponent} from './identify-details/identify-detail-device/identify-detail-device.component';
import {IdentifyDetailPlaceComponent} from './identify-details/identify-detail-place/identify-detail-place.component';
import {IdentifyDetailEmployeeComponent} from './identify-details/identify-detail-employee/identify-detail-employee.component';
import {IdentifyDetailOfficeComponent} from './identify-details/identify-detail-office/identify-detail-office.component';

@NgModule({
  declarations: [
    IdentifyComponent,
    IdentifyQrComponent,
    IdentifyDetailsComponent,
    IdentifyDetailDeviceComponent,
    IdentifyDetailEmployeeComponent,
    IdentifyDetailOfficeComponent,
    IdentifyDetailPlaceComponent,
  ],
  imports: [
    CommonModule,
    IdentifyRouting,
    SharedModule
  ],
  exports: [
    IdentifyRouting,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [IdentifyDetailsService]
})
export class IdentifyModule {
}
