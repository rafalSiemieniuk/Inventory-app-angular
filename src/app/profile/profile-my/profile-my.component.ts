import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {ProfileService} from '../profile.service';
import {User} from '../../user.interface';
import {Office} from '../../office.iterface';

@Component({
  selector: 'app-profile-my',
  templateUrl: './profile-my.component.html',
  styleUrls: ['./profile-my.component.scss']
})
export class ProfileMyComponent implements OnInit {

  scale = 5;
  office: Office;
  // user: User;
  constructor(public authService: AuthService, private profileService: ProfileService) { }
  ngOnInit() {
     this.getOffice();
  }
  getOffice() {
    this.profileService.getOffices().subscribe((item) => {
      item.forEach(e => {
        if (e.id === this.authService.user.officeId) {
          this.office = e;
        }
      });
    });
  }
}
