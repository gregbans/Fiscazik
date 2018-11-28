import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';
import { request } from 'https';

@Injectable({
  providedIn: 'root'
})
export class BaremesService {

  constructor(private http: HttpClient) { }


  getBaremes(): Observable<any[]> {
  return Observable.create(observer => {
      return this.http.get('http://bansproduction-com.mon.world/baremes')
          .subscribe(success => {
                  console.log('bareme service getBaremes success');
                  console.log(success);
                  observer.next(success);
                  observer.complete();
              }, error => {
                  observer.error(error);
              }
          );
  });
    // return this.http.get<any[]>('http://bansproduction-com.mon.world/baremes');
  }

  updateBaremes(baremes): Observable<any[]> {
      return this.http.get<any[]>('http://bansproduction-com.mon.world/updateBaremes/'+JSON.stringify(baremes)+'');
  }

  getBareme(idbareme:number): Observable<any[]> {
    return this.http.get<any[]>('http://bansproduction-com.mon.world/bareme/'+idbareme+'');
  }

  setBareme(valeurbareme : number): Observable<any[]> {
    return this.http.get<any[]>('http://bansproduction-com.mon.world/setbareme/'+valeurbareme+'');
  }
}
