import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';
import { BaremesService } from '../services/baremes.service';
import {Observable} from 'rxjs';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  fraisActuel: Frais;

  SuperTotal: Number = 0;

  dataStock: any[]= [];

  constructor(public listingService: ListingService,
              private bs: BaremesService,
              private transitService : TransitService) {
    this.fraisActuel = this.transitService.getFrais();
  }

  ngOnInit() {
    this.bs.getBaremes().subscribe(
      (res: any) => {
        console.log('ListComponent ngOnInit res', res);
      },
      (error:any)=>{
        console.log('ListComponent ngOnInit error', error);
      }
    )
    
    this.fraisActuel = this.transitService.getFrais();
    console.log("ListComponent this.fraisActuel")
    console.log(this.fraisActuel)

    this.dataStock = this.listingService.getListing();
    
    this.dataStock.forEach(elem => {
      if (elem.type == 1){
        elem.resultat = this.fraisActuel.montantArtisteMusiciens.total;
      }
      if (elem.type == 2){
        elem.resultat = this.fraisActuel.montantFraisRepresent.total;
      }
      if (elem.type == 3){
        elem.resultat = this.fraisActuel.montantFraisTransport.total;
      }
      if (elem.type == 4){
        elem.resultat = this.fraisActuel.montantautresFraisTrans.total;
      }
      if (elem.type == 5){
        elem.resultat = this.fraisActuel.montantRepas.total;
      }
      if (elem.type == 6){
        elem.resultat = this.fraisActuel.montantRepasDep.total;
      }
      if (elem.type == 7){
        elem.resultat = this.fraisActuel.montantFraisTotalDocu.total;
      }
      if (elem.type == 8){
        elem.resultat = this.fraisActuel.montantSurfacePro.total;
      }
      if (elem.type == 9){
        elem.resultat = this.fraisActuel.montantFraisMateriel.total;
      }
      if (elem.type == 10){
        elem.resultat = this.fraisActuel.montantCotisationPro.total;
      }
      if (elem.type == 11){
        elem.resultat = this.fraisActuel.montantAutresFrais.total;
      }
    })
    
    this.SuperCalcul();
  }

  SuperCalcul(){
    this.SuperTotal =
    Number(this.fraisActuel.montantArtisteMusiciens.total) +
    Number(this.fraisActuel.montantFraisRepresent.total) +
    Number(this.fraisActuel.montantFraisTransport.total)+
    Number(this.fraisActuel.montantautresFraisTrans.total) +
    Number(this.fraisActuel.montantRepas.total) +
    Number(this.fraisActuel.montantRepasDep.total) +
    Number(this.fraisActuel.montantFraisTotalDocu.total) +
    Number(this.fraisActuel.montantSurfacePro.total) +
    Number(this.fraisActuel.montantFraisMateriel.total) +
    Number(this.fraisActuel.montantCotisationPro.total) +
    Number(this.fraisActuel.montantAutresFrais.total);
  }


}
