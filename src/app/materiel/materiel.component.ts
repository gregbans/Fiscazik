import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.scss']
})
export class MaterielComponent implements OnInit {

  actuelFrais : Frais = new Frais();

  constructor(private transitService: TransitService) {
    this.actuelFrais=transitService.getFrais();
  }

  onValidate(){
    this.transitService.setFrais(this.actuelFrais);
  }


  ngOnInit() {
  }

}
