import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { AuthService } from '../../core/auth.service';




@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  offices: any[] = [];
  data = <any>{};

  constructor(private profileService: ProfileService, private authService: AuthService) {

  }


  ngOnInit() {
    this.profileService.getOffices().subscribe((item) => {
      item.forEach(e => {
        this.offices.push(e);
      });
    });


  }
  onSubmit() {
    this.data = this.authService.user;
    this.data.name = (document.getElementById('name') as HTMLInputElement).value;

    const filterOffices = this.offices.filter(function (office) {
      return office.name === (document.getElementById('office') as HTMLSelectElement).value;
    });

    const editedOffice = filterOffices[0];


    console.log(editedOffice);

    this.data.officeId = editedOffice.id;

    console.log(this.data);

  }
}


