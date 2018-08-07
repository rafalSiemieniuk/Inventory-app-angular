import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrcodeWriterComponent } from './qrcode-writer/qrcode-writer.component';
import { QrcodeReaderComponent } from './qrcode-reader/qrcode-reader.component';



@NgModule({
    declarations: [QrcodeReaderComponent, QrcodeWriterComponent],
    imports: [CommonModule],
    exports: [QrcodeReaderComponent, QrcodeWriterComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
