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

  setBareme(valeurdiagnostics : number, valeuremail : string): Observable<any[]> {
    return this.http.get<any[]>(' http://bansproduction-com.mon.world/setdiagnostic/'+ valeuremail +valeurdiagnostics+'');
  }












}
