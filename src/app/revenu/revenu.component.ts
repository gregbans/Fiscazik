import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';
import { ListingService } from '../services/listing.service';
import {isCollapsed} from 'bootstrap'


@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.scss']
})
export class RevenuComponent implements OnInit {


  // declaration puis initialisation d'un tableau de boolean pour gerer l'ouverture des pop-up.
  isCollapsed: boolean[];
  dataStock: any[]= []

  actuelFrais : Frais = new Frais();

  constructor(private transitService: TransitService,
              public listingService: ListingService) {

    this.actuelFrais=transitService.getFrais();
  }

  onValidate(){
    this.transitService.setFrais(this.actuelFrais);
  
  }


  ngOnInit() {
    this.dataStock = this.listingService.getListing();
  }

}
