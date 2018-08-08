import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {ProfileService} from '../profile.service';
import {Office} from '../../office.iterface';

@Component({
  selector: 'app-profile-my',
  templateUrl: './profile-my.component.html',
  styleUrls: ['./profile-my.component.scss']
})
export class ProfileMyComponent implements OnInit {

  office: Office;
  user;


  constructor(public authService: AuthService, private profileService: ProfileService) { }
  ngOnInit() {
    this.authService.user.subscribe((user) => {
      this.user = user;
      this.getOffice(user);
    });
  }
  getOffice(user) {
    this.profileService.getOffices().subscribe((item) => {
        this.office = item.find(office =>
        office.id === user.officeId);
    });
  }

}
