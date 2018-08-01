import { Component, OnInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { ProfileService } from '../profile.service';
import { AuthService } from '../../core/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  offices: any[] = [];
  data = <any>{};


  @ViewChild('nameEdit') nameEdit: ElementRef;
  @ViewChild('officeEdit') officeEdit: ElementRef;

  constructor(private profileService: ProfileService, private authService: AuthService, private http: HttpClient) {

  }


  ngOnInit() {
    this.profileService.getOffices().subscribe((items) => {
      this.offices = items;
    });


  }
  onSubmit() {
    this.data = this.authService.user;


    const filterOffices = this.offices.filter((office) => {
      return office.name === this.officeEdit.nativeElement.value;
    });

    const editedOffice = filterOffices[0];

    this.data.name = this.nameEdit.nativeElement.value;
    this.data.officeId = editedOffice.id;


  }
}


