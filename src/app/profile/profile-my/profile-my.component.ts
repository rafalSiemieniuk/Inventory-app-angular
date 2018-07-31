import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-profile-my',
  templateUrl: './profile-my.component.html',
  styleUrls: ['./profile-my.component.scss']
})
export class ProfileMyComponent implements OnInit {

  scale = 5;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    // console.log(this.authService.user.id);

  }

}
