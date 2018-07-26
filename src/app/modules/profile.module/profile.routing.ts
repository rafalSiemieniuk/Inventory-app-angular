import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from '../../components/profile/profile.component';
import { ProfileEditComponent } from '../../components/profile-edit/profile-edit.component';

const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        children: [{
            path: 'edit',
            component: ProfileEditComponent
        },
        ],
    }];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRouting { }
