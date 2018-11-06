import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vehicule } from '../models/vehicule.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

vehicules: Vehicule[]= [];
vehiculeSubject = new Subject <Vehicule[]>()

  constructor() { }

emitVehicules(){
  this.vehiculeSubject.next(this.vehicules);
}

saveVehicules(){
  firebase.database().ref('/vehicules').set(this.vehicules);
}

getVehicules(){
  firebase.database().ref('/vehicules')
    .on('value', (data)=>{
      this.vehicules = data.val() ? data.val() : [];
      this.emitVehicules();
  });
}

getSingleVehicule(id: number) {
  return new Promise(
    (resolve, reject)=>{
      firebase.database().ref('/vehicules/' + id).once('value').then(
        (data)=>{
          resolve(data.val());
        },(error)=>{
          reject(error);
        }
        );
    }
  );
}

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
