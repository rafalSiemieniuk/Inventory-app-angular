import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileRouting } from './profile.routing';
import {QrcodeWriterComponent} from '../qrcode-writer/qrcode-writer.component';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';
import {ProfileMyComponent} from './profile-my/profile-my.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProfileService } from './profile.service';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [ProfileComponent, ProfileEditComponent, ProfileMyComponent, QrcodeWriterComponent],
    imports: [CommonModule, ProfileRouting, ReactiveFormsModule],
    exports: [ProfileRouting],
    providers: [ProfileService],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ]

})
export class ProfileModule { }
