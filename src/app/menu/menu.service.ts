import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  subject = new Subject();
  get menu$(): Observable<any> {
    return this.subject.asObservable();
  }
  toggle() {
    this.subject.next();
  }

}
