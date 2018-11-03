import { Component, OnInit } from '@angular/core';
import { Frais } from '../models/frais.model';
import { TransitService } from '../services/transit.service';

@Component({
  selector: 'app-autres-frais',
  templateUrl: './autres-frais.component.html',
  styleUrls: ['./autres-frais.component.scss']
})
export class AutresFraisComponent implements OnInit {


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

