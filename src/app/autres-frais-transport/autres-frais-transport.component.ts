import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-autres-frais-transport',
  templateUrl: './autres-frais-transport.component.html',
  styleUrls: ['./autres-frais-transport.component.scss']
})
export class AutresFraisTransportComponent implements OnInit {

  actuelFrais : Frais = new Frais();

  constructor(private transitService: TransitService,
    public listingService: ListingService) { 
    this.actuelFrais=transitService.getFrais();
  }

  onValidate(){
    this.actuelFrais.montantautresFraisTrans.montantAutresFraisTrans = Number (this.actuelFrais.montantautresFraisTrans.montantAutresFraisTrans);
    this.actuelFrais.montantautresFraisTrans.total = Number (this.actuelFrais.montantautresFraisTrans.total);
    this.transitService.setFrais(this.actuelFrais);
  }

  calculer() {
    this.actuelFrais.montantautresFraisTrans.total = Number (this.actuelFrais.montantautresFraisTrans.montantAutresFraisTrans);
  }

  ngOnInit() {
  }

}
