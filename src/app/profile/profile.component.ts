import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User = null;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.profileService.getCurrentUser()
      .subscribe((user) => {
        this.user = user;
      });
  }

}

export interface User {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  login: string;
  officeId: boolean;
}
