import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscriptionUiService {
  private showDiscription: boolean = false;
  private subject = new Subject<any>();

  constructor() { }


  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
