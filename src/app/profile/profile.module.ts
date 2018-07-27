import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileRouting } from './profile.routing';
import { ProfileEditComponent } from './profile-edit.component';

@NgModule({
    declarations: [ProfileComponent, ProfileEditComponent],
    imports: [CommonModule, ProfileRouting],
    exports: [ProfileRouting],
    providers: [],
})
export class ProfileModule { }
