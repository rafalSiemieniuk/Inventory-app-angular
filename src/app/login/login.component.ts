import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string = null;
  password: string = null;

  constructor(private authService: AuthService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
  }

  authorizate() {
    const loginAuth: Auth = {
      login: this.login,
      password: this.password
    };

    return this.authService.login(loginAuth).subscribe((response) => {
      this.authService.setToken(response.token);
      this.router.navigate(['/profile']);
      this.appComponent.getUser();
    });
  }
}

export interface Auth {
  login: string;
  password: string;
}
