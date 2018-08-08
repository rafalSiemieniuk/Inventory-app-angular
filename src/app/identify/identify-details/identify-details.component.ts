import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IdentifyDetailsService} from './identify-details.service';

@Component({
  selector: 'app-identify-details',
  templateUrl: './identify-details.component.html',
  styleUrls: ['./identify-details.component.scss']
})
export class IdentifyDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: IdentifyDetailsService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getObject(params.id).subscribe(item => this.detectType(item)
      );
    });
  }
  detectType(object) {
    if (object.user) {
      this.router.navigate(['/identify/details/user/' + object.user.id]);
    } else if (object.device) {
      this.router.navigate(['/identify/details/device/' + object.device.id]);
    } else if (object.office) {
      this.router.navigate(['/identify/details/office/' + object.office.id]);
    } else if (object.place) {
      this.router.navigate(['/identify/details/place/' + object.place.id]);
    }
  }

}
