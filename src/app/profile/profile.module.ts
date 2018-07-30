import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileRouting } from './profile.routing';
import { ProfileEditComponent } from './profile-edit.component';
import { ProfileMyComponent } from './profile-my/profile-my.component';
import { AllDevicesComponent } from './all-devices/all-devices.component';

@NgModule({
    declarations: [ProfileComponent, ProfileEditComponent, ProfileMyComponent, AllDevicesComponent],
    imports: [CommonModule, ProfileRouting],
    exports: [ProfileRouting],
    providers: [],
})
export class ProfileModule { }
