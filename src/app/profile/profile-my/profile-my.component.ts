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
  user: User;
  constructor(public authService: AuthService, private profileService: ProfileService) { }
  ngOnInit() {
     this.authService.getCurrentUser().subscribe(item => {
      this.user = item;
      this.getOffice(this.user.officeId);

    });

  }
  getOffice(id) {
    this.profileService.getOffices().subscribe((item) => {
      item.forEach(e => {
        if (e.id === id) {
          this.office = e;
          console.log(this.office.name);

        }
      });
    });
  }
}
