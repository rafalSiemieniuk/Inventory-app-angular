import { Component, OnInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { ProfileService } from '../profile.service';
import { AuthService } from '../../core/auth.service';
import { Location } from '@angular/common';
import * as ons from 'onsenui';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  offices: any[] = [];
  data = null;


  @ViewChild('nameEdit') nameEdit: ElementRef;
  @ViewChild('officeEdit') officeEdit: ElementRef;

  constructor(private profileService: ProfileService, private authService: AuthService, private location: Location) {

  }

  profileForm = new FormGroup({
    id: new FormControl(),
    avatar: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    login: new FormControl(),
    officeId: new FormControl(),
    isAdmin: new FormControl(),
  });


  ngOnInit() {
    this.profileService.getOffices().subscribe((items) => {
      this.offices = items;
    });


  }
  onSubmit() {

    const filterOffices = this.offices.filter((office) => {
      return office.name === this.officeEdit.nativeElement.value;
    });

    const editedOffice = filterOffices[0];

    this.data.firstName = this.nameEdit.nativeElement.value;
    this.data.officeId = editedOffice.id;

    this.profileService.updateUser(this.data).subscribe();
    this.location.back();
    ons.notification.toast('Submit successful', { timeout: 2000 });
  }
}


