import { Injectable } from '@angular/core';
import { Frais, ArtisteMusiciens, MontantFraisTransports, MontantRepas, MontantRepasDep, MontantSurfacePro, MontantFraisRepresent, MontantFraisTotalDocu, MontantFraisMateriel, MontantCotisationPro, MontantAutresFrais, MontantFraisAutresFraisTrans, MontantAutresFraisTrans } from '../models/frais.model';


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
      this.fraisActuel=JSON.parse(localStorage.getItem("sauvegardeFrais" + localStorage.getItem("email")))
    }
    if(this.fraisActuel === undefined){
      this.fraisActuel=new Frais();
      // this.fraisActuel.montantSuperTotal = 0;

      this.fraisActuel.montantArtisteMusiciens= new ArtisteMusiciens();
      this.fraisActuel.montantArtisteMusiciens.montantRemunerationNet = 0;
      this.fraisActuel.montantArtisteMusiciens.montantAllocationChomage = 0;
      this.fraisActuel.montantArtisteMusiciens.total = 0;

      this.fraisActuel.montantFraisRepresent= new MontantFraisRepresent();
      this.fraisActuel.montantFraisRepresent.montantFraisRepresent = 0;
      this.fraisActuel.montantFraisRepresent.total = 0;

      this.fraisActuel.montantFraisTransport = new MontantFraisTransports();
      this.fraisActuel.montantFraisTransport.ChoixVehicule = "Veuillez enregistrer un vehicule";
      this.fraisActuel.montantFraisTransport.nbKm5_20 = 0;
      this.fraisActuel.montantFraisTransport.nbKmInf5 = 0;
      this.fraisActuel.montantFraisTransport.nbKmSup20 = 0;
      this.fraisActuel.montantFraisTransport.total = 0;

      this.fraisActuel.montantautresFraisTrans= new MontantAutresFraisTrans();
      this.fraisActuel.montantFraisRepresent.montantFraisRepresent = 0;
      this.fraisActuel.montantFraisRepresent.total = 0;

      this.fraisActuel.montantRepas = new MontantRepas();
      this.fraisActuel.montantRepas.montantTotalRepas = 0;
      this.fraisActuel.montantRepas.nombreRepas = 0;
      this.fraisActuel.montantRepas.total = 0;

      this.fraisActuel.montantRepasDep = new MontantRepasDep();
      this.fraisActuel.montantRepasDep.montantTotalRepasDep = 0;
      this.fraisActuel.montantRepasDep.nombreRepasDep = 0;
      this.fraisActuel.montantRepasDep.total = 0;

      this.fraisActuel.montantFraisTotalDocu = new MontantFraisTotalDocu();
      this.fraisActuel.montantFraisTotalDocu.montantFraisTotalDocu = 0;
      this.fraisActuel.montantFraisTotalDocu.total = 0;

      this.fraisActuel.montantSurfacePro = new MontantSurfacePro();
      this.fraisActuel.montantSurfacePro.SurfaceTotale = 0;
      this.fraisActuel.montantSurfacePro.SurfacePro = 0;
      this.fraisActuel.montantSurfacePro.loyer = 0;
      this.fraisActuel.montantSurfacePro.total = 0;

      this.fraisActuel.montantFraisMateriel = new MontantFraisMateriel();
      this.fraisActuel.montantFraisMateriel.montantFraisMateriel= 0;
      this.fraisActuel.montantFraisMateriel.total = 0;

      this.fraisActuel.montantCotisationPro = new MontantCotisationPro();
      this.fraisActuel.montantCotisationPro.montantCotisationPro= 0;
      this.fraisActuel.montantCotisationPro.total=0;

      this.fraisActuel.montantAutresFrais = new MontantAutresFrais();
      this.fraisActuel.montantAutresFrais.montantAutresFrais=0;
      this.fraisActuel.montantAutresFrais.total=0;
    }
  }
  
}