import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  offices: any[] = [{
    'name': 'Warsaw',
  }, {
    'name': 'Paris',
  },
  {
    'name': 'London',
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
