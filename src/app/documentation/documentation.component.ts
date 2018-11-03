import { Component, OnInit } from '@angular/core';
import { TransitService } from '../services/transit.service';
import { Frais } from '../models/frais.model';


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {


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
