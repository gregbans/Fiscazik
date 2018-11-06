import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';
import { BaremesService } from '../services/baremes.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // creation d'un tablau pour stocker les données
  dataStock: any[]= [];
  taux: any[];
  // declaration puis initialisation d'un tableau de boolean pour gerer l'ouverture des pop-up.
  isCollapsed: boolean[] = new Array(false, false, false, false,false, false,false, false,false, false,false)

  constructor(public listingService: ListingService,private bs: BaremesService  ) {

    // recuperation du modele de donné
      
  }

  ngOnInit() {

    this.bs.setBareme(23).subscribe(
      (res: any) => {
        this.bs.getBaremes().subscribe(
          (res: any) => {
             console.log('updated demande', res[14]);
          }
       )
      }
   )


 

    this.dataStock = this.listingService.getListing();
  }

}
