import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';
import { BaremesService } from '../services/baremes.service';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-habitation',
  templateUrl: './habitation.component.html',
  styleUrls: ['./habitation.component.scss']
})
export class HabitationComponent implements OnInit {

  actuelFrais : Frais = new Frais();
  surfacePro: number;
  surfacePro2: number;
  loyer: number;
  leresultat= 0;


  constructor(private transitService: TransitService,
              public listingService: ListingService){ 
    this.actuelFrais=transitService.getFrais();
  }

  onValidate(){

      this.actuelFrais.montantSurfacePro.loyer = Number (this.actuelFrais.montantSurfacePro.loyer)
      this.actuelFrais.montantSurfacePro.SurfaceTotale = Number (this.actuelFrais.montantSurfacePro.SurfaceTotale)
      this.actuelFrais.montantSurfacePro.SurfacePro = Number (this.actuelFrais.montantSurfacePro.SurfacePro)
      this.actuelFrais.montantSurfacePro.total = Number (this.actuelFrais.montantSurfacePro.total)
      this.transitService.setFrais(this.actuelFrais);
    }

  calculer(){
    this.surfacePro = Number(this.actuelFrais.montantSurfacePro.SurfacePro) / Number(this.actuelFrais.montantSurfacePro.SurfaceTotale);
    this.actuelFrais.montantSurfacePro.total = Number (this.actuelFrais.montantSurfacePro.loyer) * this.surfacePro
  }

  ngOnInit() {
  }

}
