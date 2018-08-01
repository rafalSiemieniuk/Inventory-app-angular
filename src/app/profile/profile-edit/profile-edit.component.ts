import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  offices: any[] = [];
  target = '';
  editForm: FormGroup;
  constructor(private profileService: ProfileService) {
    this.editForm = new FormGroup({
      name: new FormControl(''),
      office: new FormControl([])
    });
  }


  ngOnInit() {
    this.profileService.getOffices().subscribe((item) => {
      item.forEach(e => {
        this.offices.push(e);
      });
    });


  }
  onSubmit() {
    console.log('dupa');
  }
}


