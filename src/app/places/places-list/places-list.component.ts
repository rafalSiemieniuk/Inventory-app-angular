import {Component, Input, OnInit} from '@angular/core';
import {PlacesService} from '../places.service';
import {routes} from '../../menu/routes';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {

  places;
  filteredPlaces;
  offices;

  constructor(private  placesService: PlacesService) {
  }

  ngOnInit() {
    this.placesService.getOffices().subscribe(objects => {
      this.offices = objects;

      this.placesService.getPlaces().subscribe(places => {
        this.places = places;
        this.officeList(this.offices[0].id);
      });
    });
  }

  officeList(officeId) {
    this.filteredPlaces = this.places.filter(item => item.officeId === officeId);
  }

}
