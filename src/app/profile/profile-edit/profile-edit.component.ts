import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  offices: any[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getOffices().subscribe((item) => {
      item.forEach(e => {
        this.offices.push(e);
      });
    });

  }
}


