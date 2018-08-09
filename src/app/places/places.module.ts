import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {PlacesComponent} from './places.component';
import {PlacesAddComponent} from './places-add/places-add.component';
import {PlacesDetailsComponent} from './places-details/places-details.component';
import {PlacesListComponent} from './places-list/places-list.component';
import {PlacesRouting} from './places.routing';
import {PlacesService} from './places.service';

@NgModule({
  declarations: [
    PlacesComponent,
    PlacesAddComponent,
    PlacesDetailsComponent,
    PlacesListComponent
  ],
  imports: [
    CommonModule,
    PlacesRouting,
    SharedModule
  ],
  exports: [PlacesRouting],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PlacesService]
})
export class PlacesModule {
}

