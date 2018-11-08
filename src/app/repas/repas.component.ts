import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';
import { BaremesService } from '../services/baremes.service';


@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.scss']
})
export class RepasComponent implements OnInit {

actuelFrais : Frais = new Frais();

leresultat = 0;
repasInt = 0;

actuelTaux = 0;

  constructor(private transitService : TransitService,private bs: BaremesService) {
    this.actuelFrais=transitService.getFrais();
    
    this.bs.getBareme(0).subscribe(
      (res: any) => {
        this.actuelTaux= Number(res.valeur_bareme);
      }
  )
  }

  calculer() {
    this.repasInt = Number(this.actuelFrais.montantRepas.nombreRepas) * this.actuelTaux;
    this.leresultat = Number(this.actuelFrais.montantRepas.montantTotalRepas) - (this.repasInt);
  }

  onValidate(){
    this.transitService.setFrais(this.actuelFrais);
  }

  ngOnInit() {
  }

}
