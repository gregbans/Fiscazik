import { Component, OnInit } from '@angular/core';
import { TransitService } from '../services/transit.service';
import { Frais } from '../models/frais.model';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-cotisation',
  templateUrl: './cotisation.component.html',
  styleUrls: ['./cotisation.component.scss']
})
export class CotisationComponent implements OnInit {

  actuelFrais : Frais = new Frais();

  constructor(private transitService: TransitService,
              public listingService: ListingService) {
                this.actuelFrais=transitService.getFrais();
  }

  onValidate(){
  this.actuelFrais.montantCotisationPro.montantCotisationPro = Number (this.actuelFrais.montantCotisationPro.montantCotisationPro);
  this.actuelFrais.montantCotisationPro.total = Number (this.actuelFrais.montantCotisationPro.total);
  this.transitService.setFrais(this.actuelFrais);
  }
  
  calculer() {
    this.actuelFrais.montantCotisationPro.total = Number (this.actuelFrais.montantCotisationPro.montantCotisationPro);
  }

  ngOnInit() {
  }

}
