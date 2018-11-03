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
// totalFraisDefiscal : number;
// a= this.actuelFrais.montantRepas.montantTotalRepas;
// b= this.actuelFrais.montantRepas.nombreRepas;

  constructor(private transitService : TransitService) {
    this.actuelFrais=transitService.getFrais();
  }

  // calcul(){
  //   this.totalFraisDefiscal = this.a + this.b
  //   return this.totalFraisDefiscal;
  // }

  onValidate(){
    this.transitService.setFrais(this.actuelFrais);
  }

  ngOnInit() {
  }

}
