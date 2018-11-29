import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';
import { ListingService } from '../services/listing.service';


@Component({
  selector: 'app-repas-deplacement',
  templateUrl: './repas-deplacement.component.html',
  styleUrls: ['./repas-deplacement.component.scss']
})
export class RepasDeplacementComponent implements OnInit {

  actuelFrais : Frais = new Frais();

  constructor(private transitService: TransitService,
              public listingService: ListingService) {
    this.actuelFrais=transitService.getFrais();
  }

  onValidate(){
    this.actuelFrais.montantRepasDep.montantTotalRepasDep = Number (this.actuelFrais.montantRepasDep.montantTotalRepasDep);
    this.actuelFrais.montantRepasDep.total= Number (this.actuelFrais.montantRepasDep.total);
    this.transitService.setFrais(this.actuelFrais);
  }
  
  calculer() {
    this.actuelFrais.montantRepasDep.total = Number (this.actuelFrais.montantRepasDep.montantTotalRepasDep);
  }

  ngOnInit() {
  }

}
