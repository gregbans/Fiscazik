import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticsService {

  constructor(private http: HttpClient) { }


  getDiagnostics(): Observable<any[]> {
    return this.http.get<any[]>('http://bansproduction-com.mon.world/diagnostics');
  }

  getDiagnostic(email_diagnostic:String) {
    return this.http.get<any[]>('http://bansproduction-com.mon.world/diagnostic/'+email_diagnostic+'');
  }



  // getDiagnostic(email_diagnostic : string, id_diagnostic:number): Observable<any[]> {
  //   return this.http.get<any[]>(' http://bansproduction-com.mon.world/diagnostic/'+email_diagnostic+'' + id_diagnostic+"");
  // }












}
