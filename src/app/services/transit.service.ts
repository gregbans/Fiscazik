import { Injectable } from '@angular/core';
import { Frais } from '../models/frais.model';


@Injectable({
  providedIn: 'root'
})

export class TransitService {
  
fraisActuel: Frais;

getFrais(){
  return this.fraisActuel;
}
setFrais(frais: Frais){
  this.fraisActuel= frais;
  localStorage.setItem("sauvegardeFrais" + localStorage.getItem("email"), JSON.stringify(this.fraisActuel));
}

  
    constructor() { 
      if(localStorage.getItem("email")!= undefined && localStorage.getItem("sauvegardeFrais"+ localStorage.getItem("email"))!= undefined){
        this.fraisActuel=JSON.parse(localStorage.getItem("sauvegardeFrais" + localStorage.getItem("email")));
        if(this.fraisActuel=== undefined){
          this.fraisActuel=new Frais();
          this.fraisActuel.montantFraisTotalDocu = 0;
        }
      }else{
        this.fraisActuel=new Frais();
        this.fraisActuel.montantFraisTotalDocu = 0;
      }
    }
  
  
}