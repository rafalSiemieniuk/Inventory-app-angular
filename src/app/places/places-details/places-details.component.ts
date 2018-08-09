import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlacesService} from '../places.service';

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.component.html',
  styleUrls: ['./places-details.component.scss']
})
export class PlacesDetailsComponent implements OnInit {

  place;
  devices;

  constructor(private route: ActivatedRoute, private placesService: PlacesService) {
  }

  ngOnInit() {
    this.placesService.getPlace(this.route.snapshot.params.id)
      .subscribe(place => {
        this.place = place;
        this.getDevices(place.id);
      });
  }

  getDevices(placeId) {
    this.placesService.getDevices().subscribe(devices => {
      this.devices = devices.filter(item => item.belongsToId === placeId);
    });
  }

}
