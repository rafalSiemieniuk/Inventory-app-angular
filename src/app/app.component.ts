import { Component, OnInit } from '@angular/core';
import { UserService } from './core/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    if (!this.userService.user) {
      this.userService.getCurrentUser()
        .subscribe((user) => {
          this.userService.user = user;
        });
    }
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
  isAdmin: boolean;
}
