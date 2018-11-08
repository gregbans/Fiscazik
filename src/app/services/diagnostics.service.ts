import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticsService {

  constructor(private http: HttpClient) { }


  getDiagnostics(): Observable<any[]> {
    return this.http.get<any[]>(' http://bansproduction-com.mon.world/diagnostics');
  }

  getDiagnostic(iddiagnostic:number): Observable<any[]> {
    return this.http.get<any[]>('http://bansproduction-com.mon.world/diagnostic/'+iddiagnostic+'');
  }

  setDiagnostic(valeurdiagnostic : number, valeuremail : string): Observable<any[]> {
    return this.http.get<any[]>(' http://bansproduction-com.mon.world/setdiagnostic/'+ valeuremail + valeurdiagnostic+'');
  }












}
