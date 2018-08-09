import { Component, OnInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { ProfileService } from '../profile.service';
import { AuthService } from '../../core/auth.service';
import { Location } from '@angular/common';
import * as ons from 'onsenui';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  offices: any[] = [];
  data = <any>{};


  @ViewChild('nameEdit') nameEdit: ElementRef;
  @ViewChild('officeEdit') officeEdit: ElementRef;

  constructor(private profileService: ProfileService, private authService: AuthService, private location: Location) {

  }


  ngOnInit() {
    this.profileService.getOffices().subscribe((items) => {
      this.offices = items;
    });


  }
  onSubmit() {
    this.data = this.authService.user;


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


