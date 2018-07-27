import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  subject = new Subject();
  get menu$(): Observable<any>{
    return this.subject.asObservable();
  }
  open() {
    this.subject.next();
  }

}
