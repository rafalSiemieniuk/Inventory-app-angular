import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  offices: any[] = [
  ];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getOffices().subscribe((item) => {
      item.forEach(e => {
        this.offices.push(e);
      });

    });
  }
}


