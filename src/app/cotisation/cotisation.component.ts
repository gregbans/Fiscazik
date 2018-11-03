import { Component, OnInit } from '@angular/core';
import { TransitService } from '../services/transit.service';
import { Frais } from '../models/frais.model';

@Component({
  selector: 'app-cotisation',
  templateUrl: './cotisation.component.html',
  styleUrls: ['./cotisation.component.scss']
})
export class CotisationComponent implements OnInit {

  actuelFrais : Frais = new Frais();

  constructor(private transitService: TransitService) { 
    this.actuelFrais =transitService.getFrais();
  }



  ngOnInit() {
  }

}
