import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Vehicule } from '../models/vehicule.model';
import * as firebase from 'firebase';
import { HttpRequest, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

vehicules: Vehicule[]= [];
vehiculeSubject = new Subject <Vehicule[]>()

  constructor(private http: HttpClient) { }

  emitVehicules(){
  this.vehiculeSubject.next(this.vehicules);
  }

  saveVehicules(){
  firebase.database().ref('/vehicules').set(this.vehicules);
  }

  getVehicules(): Observable<any[]> {
  return Observable.create(observer => {
      return this.http.get<any[]>('http://bansproduction-com.mon.world/vehicules/'+localStorage.getItem("email"))
          .subscribe(success => {
                  console.log('vehiculeservice getVehicule success');
                  console.log(success);
                  observer.next(success);
                  observer.complete();
              }, error => {
                  console.log('vehiculeservice getVehicule error');
                  console.log(error);
                  observer.error(error);
              }
          );
    });
  }

  addVehicule(vehicule: Vehicule): Observable<any[]> {
    return Observable.create(observer => {
        return this.http.get<any[]>('http://bansproduction-com.mon.world/setVehicule/'+ vehicule.marque+"/"+vehicule.modele+"/"+vehicule.puissance+"/"+localStorage.getItem("email"))
            .subscribe(success => {
                    console.log('vehiculeservice addVehicule success');
                    console.log(success);
                    observer.next(success);
                    observer.complete();
                }, error => {
                  console.log('vehiculeservice addVehicule error');
                    console.log(error);
                    observer.error(error);
                }
            );
    });
  }
  
  deleteVehicule(vehicule: Vehicule): Observable<any[]> {
    return Observable.create(observer => {
        return this.http.get<any[]>('http://bansproduction-com.mon.world/deleteVehicule/'+ vehicule.id_vehicule )
            .subscribe(success => {
                    console.log('vehiculeservice deleteVehicule success');
                    console.log(success);
                    observer.next(success);
                    observer.complete();
                }, error => {
                  console.log('vehiculeservice deleteVehicule error');
                    console.log(error);
                    observer.error(error);
                }
            );
    });
  }
  // getSingleVehicule(id: number) {
  //   return new Promise(
  //     (resolve, reject)=>{
  //       firebase.database().ref('/vehicules/' + id).once('value').then(
  //         (data)=>{
  //           resolve(data.val());
  //         },(error)=>{
  //           reject(error);
  //         }
  //         );
  //     }
  //   );
  // }

  createNewVehicule(newVehicule: Vehicule){
    this.vehicules.push(newVehicule);
    this.saveVehicules();
    this.emitVehicules();
  }


  removeVehicule(vehicule:Vehicule){
    const vehiculeIndexToRemove = this.vehicules.findIndex(
      (vehiculeEl)=>{
        if(vehiculeEl === vehicule){
          return true;
        }
      }
    );

    this.vehicules.splice(vehiculeIndexToRemove,1);
    this.saveVehicules();
    this.emitVehicules();
  }

}
