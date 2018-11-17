import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-autres-frais',
  templateUrl: './autres-frais.component.html',
  styleUrls: ['./autres-frais.component.scss']
})
export class AutresFraisComponent implements OnInit {


  actuelFrais : Frais = new Frais();

  constructor(private transitService: TransitService,
              public listingService: ListingService) { 
    this.actuelFrais=transitService.getFrais();
  }

  onValidate(){
    this.actuelFrais.montantAutresFrais.montantAutresFrais = Number (this.actuelFrais.montantAutresFrais.montantAutresFrais)
    this.actuelFrais.montantAutresFrais.total = Number (this.actuelFrais.montantAutresFrais.total);
    this.transitService.setFrais(this.actuelFrais);
  }
  
  calculer() {
    this.actuelFrais.montantAutresFrais.total = Number (this.actuelFrais.montantAutresFrais.montantAutresFrais);
  }

  ngOnInit() {
  }

}

