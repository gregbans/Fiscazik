import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';

@Component({
  selector: 'app-repas-deplacement',
  templateUrl: './repas-deplacement.component.html',
  styleUrls: ['./repas-deplacement.component.scss']
})
export class RepasDeplacementComponent implements OnInit {

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
