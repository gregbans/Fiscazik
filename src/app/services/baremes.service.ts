import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaremesService {

  constructor(private http: HttpClient) { }


  getBaremes(): Observable<any[]> {
    const request = new HttpRequest(
      'GET', 'http://bansproduction-com.mon.world/baremes');

  return Observable.create(observer => {
      return this.http.request(request)
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
  getBareme(idbareme:number): Observable<any[]> {
    return this.http.get<any[]>('http://bansproduction-com.mon.world/bareme/'+idbareme+'');
  }

  setBareme(valeurbareme : number): Observable<any[]> {
    return this.http.get<any[]>('http://bansproduction-com.mon.world/setbareme/'+valeurbareme+'');
  }
}
