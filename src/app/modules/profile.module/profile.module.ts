import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from '../../components/profile/profile.component';
import { ProfileRouting } from './profile.routing';
import { ProfileEditComponent } from '../../components/profile-edit/profile-edit.component';

@NgModule({
    declarations: [ProfileComponent, ProfileEditComponent],
    imports: [CommonModule, ProfileRouting],
    exports: [ProfileComponent, ProfileEditComponent, ProfileRouting],
    providers: [],
})
export class ProfileModule { }
