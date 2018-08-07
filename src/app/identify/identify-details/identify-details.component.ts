import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-identify-details',
  templateUrl: './identify-details.component.html',
  styleUrls: ['./identify-details.component.scss']
})
export class IdentifyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }

}
