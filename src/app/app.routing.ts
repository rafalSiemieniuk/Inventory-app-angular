import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationGuard } from './authentication.guard';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [

    {
        path: 'profile',
        // canActivate: [AuthenticationGuard],
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'mydevices',
        // canActivate: [AuthenticationGuard],
        loadChildren: './devices/devices.module#DevicesModule'
    },
    {
        path: 'alldevices',
        // canActivate: [AuthenticationGuard],
        loadChildren: './devices/devices.module#DevicesModule'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouting { }
