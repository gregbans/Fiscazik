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
      // ton soucis c'est que tu peux pas passer autant d'element en get 
      // il te faut passer en put qui sert à updater un element et pas en get qui sert à obtenir mais du coup je pense que tu dois peut-être adapter ton API
      // Si tu appelles l'url avec tout les parametres en get tu verras d'ailleurs qu'il ignore presque tout les elements envoyés.
      // return this.http.put<any[]>('http://bansproduction-com.mon.world/updateBaremes/', baremes);
      // et peut être ajouter ça aussi dnas ton API au moins pour les test :
      //header('Access-Control-Allow-Origin: *');
      //header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
      //header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
      // sinon si ton API est censé updater en GET (ce qui est pas très logique), elle ne retourne en tout cas pas ce qui est attendu par angular. D'ou l'erreur
      
      //return this.http.put<any[]>('http://bansproduction-com.mon.world/updateBaremes/', baremes);

      return this.http.get<any[]>('http://bansproduction-com.mon.world/updateBaremes/'+JSON.stringify(baremes)+'');
  }

  getBareme(idbareme:number): Observable<any[]> {
    return this.http.get<any[]>('http://bansproduction-com.mon.world/bareme/'+idbareme+'');
  }

  setBareme(valeurbareme : number): Observable<any[]> {
    return this.http.get<any[]>('http://bansproduction-com.mon.world/setbareme/'+valeurbareme+'');
  }
}
