import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-representation',
  templateUrl: './representation.component.html',
  styleUrls: ['./representation.component.scss']
})
export class RepresentationComponent implements OnInit {

  actuelFrais : Frais = new Frais();

  constructor(private transitService: TransitService,
              public listingService: ListingService) {
    this.actuelFrais=transitService.getFrais();
      }
    
      onValidate(){
          this.actuelFrais.montantFraisRepresent.montantFraisRepresent = Number (this.actuelFrais.montantFraisRepresent.montantFraisRepresent)
          this.actuelFrais.montantFraisRepresent.total = Number(this.actuelFrais.montantFraisRepresent.total);
          console.log("RepresentationComponent this.actuelFrais ");
          console.log(this.actuelFrais);
          this.transitService.setFrais(this.actuelFrais);
          console.log("RepresentationComponent getFrais ");
          console.log(this.transitService.getFrais());
      }

      calculer() {
        this.actuelFrais.montantFraisRepresent.total = Number(this.actuelFrais.montantFraisRepresent.montantFraisRepresent);
      }
    
      ngOnInit() {
      }
    
    }