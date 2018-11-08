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
    const request = new HttpRequest(
      'GET', 'http://bansproduction-com.mon.world/diagnostic/'+email_diagnostic);
  return Observable.create(observer => { // return se met en attente 
      return this.http.request(request) // observer : permet de changer l'etat d'attente et permet de placer de la donnée au return
          // .map((res: any) => {
          //     // console.log('CompaniesService map');
          //     // console.log(res);
          //     return res;
          // })
          .subscribe((result: any) => { // le subscribe attent le retour de la requete http
            //faut appelle a une fonction anonyme
            console.log("diagnostics.service.ts result", result)

                  observer.next(result);// observer.next permet de dire ce qu'on va return, 
                  observer.complete();// observer.complete permet de dire que c'est fini et declanche le return
              },
              err => {console.log("diagnostic.service.ts err", err);observer.error(err)}//celui qui est en attente revient en erreur avec le message d'erreur
          );
  });


    return this.http.get<any[]>('http://bansproduction-com.mon.world/diagnostic/'+email_diagnostic+'');
  }



  // getDiagnostic(email_diagnostic : string, id_diagnostic:number): Observable<any[]> {
  //   return this.http.get<any[]>(' http://bansproduction-com.mon.world/diagnostic/'+email_diagnostic+'' + id_diagnostic+"");
  // }












}
