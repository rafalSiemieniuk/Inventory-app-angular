import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileRouting } from './profile.routing';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileMyComponent } from './profile-my/profile-my.component';
import { ProfileService } from './profile.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ProfileComponent, ProfileEditComponent, ProfileMyComponent],
    imports: [CommonModule, ProfileRouting, SharedModule],
    exports: [ProfileRouting],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [ProfileService],
})
export class ProfileModule { }
