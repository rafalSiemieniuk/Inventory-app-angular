import {Component, Input, OnInit} from '@angular/core';
import {PlacesService} from '../places.service';
import {routes} from '../../menu/routes';
import { getDefaultService } from '../../../../node_modules/@types/selenium-webdriver/chrome';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {

  places;
  filteredPlaces;
  offices;
  isAdmin: boolean;

  constructor(
    private placesService: PlacesService,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.getAdminIfno();
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

  getAdminIfno() {
    this.authService.user.subscribe(user => {
      this.isAdmin = user.isAdmin;
    });
  }
}




