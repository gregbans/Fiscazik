import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';
import { ListingService } from '../services/listing.service';


@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.scss']
})
export class RevenuComponent implements OnInit {

  actuelFrais : Frais = new Frais();

  constructor(private transitService: TransitService,
              public listingService: ListingService){
    this.actuelFrais=transitService.getFrais();
  }

  onValidate(){
    this.actuelFrais.montantArtisteMusiciens.montantAllocationChomage = Number (this.actuelFrais.montantArtisteMusiciens.montantAllocationChomage)
    this.actuelFrais.montantArtisteMusiciens.montantRemunerationNet = Number (this.actuelFrais.montantArtisteMusiciens.montantRemunerationNet)
    this.transitService.setFrais(this.actuelFrais);
  }
  
  
  calculer() {
    this.actuelFrais.montantArtisteMusiciens.total = Number(this.actuelFrais.montantArtisteMusiciens.montantRemunerationNet) + Number(this.actuelFrais.montantArtisteMusiciens.montantAllocationChomage);
  }


  ngOnInit() {
  }

}
