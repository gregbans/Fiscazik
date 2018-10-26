import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../../models/vehicule.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeService } from '../../services/vehicule.service';


@Component({
  selector: 'app-singlevehicule',
  templateUrl: './singlevehicule.component.html',
  styleUrls: ['./singlevehicule.component.scss']
})
export class SinglevehiculeComponent implements OnInit {

vehicule: Vehicule;


  constructor(private route: ActivatedRoute,
              private vehiculeService: VehiculeService,
              private router: Router) { }

  ngOnInit() {
    this.vehicule = new Vehicule ('', '', +'');
    const id = this.route.snapshot.params['id'];
    this.vehiculeService.getSingleVehicule(+id).then(
        (vehicule: Vehicule)=>{
          this.vehicule = vehicule;
        }
    );
  }

  onBack(){
    this.router.navigate(['/vehicule']);
  }








}
