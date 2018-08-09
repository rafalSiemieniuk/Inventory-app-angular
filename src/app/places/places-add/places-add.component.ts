import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { FormGroup, FormControl } from '@angular/forms';
import * as ons from 'onsenui';

@Component({
  selector: 'app-places-add',
  templateUrl: './places-add.component.html',
  styleUrls: ['./places-add.component.scss']
})
export class PlacesAddComponent implements OnInit {

  backhref = '../../';
  offices;

  editForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    officeId: new FormControl(),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placesService: PlacesService) { }

  ngOnInit() {
    this.placesService.getOffices().subscribe(objects => {
      this.offices = objects;
      this.editForm.controls.officeId.setValue(this.offices[0].id);
    });
    const id = this.route.snapshot.params.id;
    if (id !== 'new') {
      this.getDevice(id);
      this.backhref = '../';
    }
  }
  getDevice(placeId) {
    this.placesService.getById(placeId).subscribe(item => {
      this.editForm.setValue(item);
    });
  }

  onSubmit() {
    const place = this.editForm.value;
    if (!place.name || place.name.replace(/\s/g, '') === '') {
      return ons.notification.alert('Incorrect name field');
    }
    this.router.navigate([`/places/placeslist`]);
    ons.notification.toast('Operation unsuccessful', { timeout: 2000 });
    this.placesService.saveDevice(place).subscribe();
  }
}
