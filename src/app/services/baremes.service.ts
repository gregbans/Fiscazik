import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaremesService {

  constructor(private http: HttpClient) { }


  getBaremes(): Observable<any[]> {
    return this.http.get<any[]>('http://bansproduction-com.mon.world/baremes');
  }
  getBareme(idbareme:number): Observable<any[]> {
    return this.http.get<any[]>('http://bansproduction-com.mon.world/bareme/'+idbareme+'');
  }

  setBareme(valeurbareme : number): Observable<any[]> {
    return this.http.get<any[]>('http://bansproduction-com.mon.world/setbareme/'+valeurbareme+'');
  }
}
