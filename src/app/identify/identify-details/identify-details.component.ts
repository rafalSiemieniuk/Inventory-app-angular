import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IdentifyDetailsService} from './identify-details.service';
import * as ons from 'onsenui';

@Component({
  selector: 'app-identify-details',
  templateUrl: './identify-details.component.html',
  styleUrls: ['./identify-details.component.scss']
})
export class IdentifyDetailsComponent implements OnInit {
  object;
  objectType;

  constructor(private route: ActivatedRoute, private service: IdentifyDetailsService, private router: Router) {
  }

  ngOnInit() {
    this.service.getObject(this.route.snapshot.params.id)
      .subscribe(item => {
        ons.notification.toast('Correct device', { timeout: 2000 });
        this.detectType(item);
      }, () => {
        this.router.navigate(['/identify/identifyqr']);
        ons.notification.toast('Incorrect device', { timeout: 2000 });
    });
  }

  detectType(object) {
    this.object = object[object.objectType];
    this.objectType = object.objectType;
  }

}
