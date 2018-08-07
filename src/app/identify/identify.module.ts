import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IdentifyComponent} from './identify.component';
import {IdentifyQrComponent} from './identify-qr/identify-qr.component';
import {IdentifyDetailsComponent} from './identify-details/identify-details.component';
import {CommonModule} from '@angular/common';
import {IdentifyRouting} from './identify.routing';
import {QrcodeReaderComponent} from '../qrcode-reader/qrcode-reader.component';

@NgModule({
  declarations: [IdentifyComponent, IdentifyQrComponent, IdentifyDetailsComponent, QrcodeReaderComponent],
  imports: [CommonModule, IdentifyRouting],
  exports: [IdentifyRouting],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class IdentifyModule { }
