import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // creation d'un tablau pour stocker les données
  dataStock: any[]= []
  // declaration puis initialisation d'un tableau de boolean pour gerer l'ouverture des pop-up.
  isCollapsed: boolean[] = new Array(false, false, false, false,false, false,false, false,false, false,false)

  constructor(public listingService: ListingService  ) {

    // recuperation du modele de donné
      
  }

  ngOnInit() {
    this.dataStock = this.listingService.getListing();
  }

}
