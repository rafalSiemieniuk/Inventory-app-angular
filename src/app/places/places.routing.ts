import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {PlacesAddComponent} from './places-add/places-add.component';
import {PlacesDetailsComponent} from './places-details/places-details.component';
import {PlacesListComponent} from './places-list/places-list.component';
import {PlacesComponent} from './places.component';

const placesRoutes: Routes = [
  {
    path: '',
    component: PlacesComponent,
    children: [
      {
        path: 'placeslist',
        component: PlacesListComponent
      }, {
        path: 'addplace',
        component: PlacesAddComponent
      }, {
        path: 'placedetails',
        component: PlacesDetailsComponent
      }, {
        path: '',
        redirectTo: 'placeslist',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(placesRoutes)
  ],
  exports: [RouterModule]
})
export class PlacesRouting {
}
