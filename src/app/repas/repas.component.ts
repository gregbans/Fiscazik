import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';



@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.scss']
})
export class RepasComponent implements OnInit {

actuelFrais : Frais = new Frais();
leresultat = 0;
repasInt = 0;

  constructor(private transitService : TransitService) {
    this.actuelFrais=transitService.getFrais();
  }

  calculer() {
    this.repasInt = Number(this.actuelFrais.montantRepas.nombreRepas) * 4.75;
    this.leresultat = Number(this.actuelFrais.montantRepas.montantTotalRepas) - (this.repasInt);
  }

  onValidate(){
    this.transitService.setFrais(this.actuelFrais);
  }

  ngOnInit() {
  }

}
