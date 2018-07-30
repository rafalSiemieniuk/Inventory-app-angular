import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileEditComponent } from './profile-edit.component';

const profileRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            {
                path: 'edit',
                component: ProfileEditComponent
            },
        ],
    }];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(profileRoutes)],
    exports: [RouterModule]
})
export class ProfileRouting { }
