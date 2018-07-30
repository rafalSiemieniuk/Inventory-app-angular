import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth.service';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit     {

  title = 'app';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    if (!this.authService.user) {
      this.authService.getCurrentUser()
        .subscribe((user: User) => {
          this.authService.user = user;
        });
    }
  }
}
