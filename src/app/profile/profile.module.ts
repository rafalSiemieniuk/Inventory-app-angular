import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileRouting } from './profile.routing';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileMyComponent } from './profile-my/profile-my.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [ProfileComponent, ProfileEditComponent, ProfileMyComponent],
    imports: [CommonModule, ProfileRouting],
    exports: [ProfileRouting],
    providers: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ]

})
export class ProfileModule { }
