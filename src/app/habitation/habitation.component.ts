import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';
import { BaremesService } from '../services/baremes.service';

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


  constructor(private transitService: TransitService) { 
    this.actuelFrais=transitService.getFrais();
  }

  onValidate(){
    this.transitService.setFrais(this.actuelFrais);
  }

  calculer(){
    this.surfacePro = Number(this.actuelFrais.montantSurfacePro.SurfacePro) * 100;
    this.surfacePro2 = (this.surfacePro2) / Number(this.actuelFrais.montantSurfacePro.SurfaceTotale);
    this.loyer = Number(this.actuelFrais.montantSurfacePro.loyer) * (this.surfacePro2);
    this.leresultat = (this.loyer) / 100 ;
  }

  ngOnInit() {
  }

}
