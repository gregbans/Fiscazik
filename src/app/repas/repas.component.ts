import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';
import { BaremesService } from '../services/baremes.service';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.scss']
})
export class RepasComponent implements OnInit {

actuelFrais : Frais = new Frais();

repasInt = 0;

actuelTaux = 0;

  constructor(private transitService : TransitService,
              private bs: BaremesService,
              public listingService: ListingService) {
    this.actuelFrais=transitService.getFrais();
    
    this.bs.getBareme(0).subscribe(
      (res: any) => {
        this.actuelTaux= Number(res.valeur_bareme);
      })
  }

  onValidate(){
    this.actuelFrais.montantRepas.nombreRepas = Number (this.actuelFrais.montantRepas.nombreRepas);
    this.actuelFrais.montantRepas.montantTotalRepas = Number(this.actuelFrais.montantRepas.montantTotalRepas);
    this.actuelFrais.montantRepas.total = Number (this.actuelFrais.montantRepas.total);
    this.actuelTaux = Number(this.actuelTaux);
    this.transitService.setFrais(this.actuelFrais);
  }

  calculer() {
    this.repasInt = Number(this.actuelFrais.montantRepas.nombreRepas) * Number(this.actuelTaux);
    this.actuelFrais.montantRepas.total = Number(this.actuelFrais.montantRepas.montantTotalRepas) - this.repasInt;
  }

  ngOnInit() {
  }

}
