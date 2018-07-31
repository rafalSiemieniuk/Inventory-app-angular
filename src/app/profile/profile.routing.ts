import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileMyComponent } from './profile-my/profile-my.component';

const profileRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            {
                path: 'myprofile',
                component: ProfileMyComponent
            },
            {
                path: 'edit',
                component: ProfileEditComponent
            },
            {
                path: '',
                redirectTo: 'myprofile',
                pathMatch: 'full'
            }
        ],
    }];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(profileRoutes)],
    exports: [RouterModule]
})
export class ProfileRouting { }
