import { Component, OnInit } from '@angular/core';
import { TransitService } from '../services/transit.service';
import { Frais } from '../models/frais.model';
import { ListingService } from '../services/listing.service';


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {


  actuelFrais : Frais = new Frais();

  constructor(private transitService: TransitService,
    public listingService: ListingService) {
this.actuelFrais=transitService.getFrais();
  }

  onValidate(){
    this.actuelFrais.montantFraisTotalDocu.montantFraisTotalDocu = Number (this.actuelFrais.montantFraisTotalDocu.montantFraisTotalDocu);
    this.actuelFrais.montantFraisTotalDocu.total = Number (this.actuelFrais.montantFraisTotalDocu.total)
    this.transitService.setFrais(this.actuelFrais);
  }
  
  calculer() {
    this.actuelFrais.montantFraisTotalDocu.total = Number (this.actuelFrais.montantFraisTotalDocu.montantFraisTotalDocu);
  }
  ngOnInit() {
  }

}
