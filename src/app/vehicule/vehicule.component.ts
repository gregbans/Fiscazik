import { Component, OnInit, OnDestroy } from '@angular/core';
import { Vehicule } from '../models/vehicule.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { VehiculeService } from '../services/vehicule.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit, OnDestroy {

vehicules : Vehicule[];
vehiculesSubscription: Subscription;

  constructor(private vehiculeService: VehiculeService, private router: Router) { }

  ngOnInit() {
    this.vehiculesSubscription = this.vehiculeService.vehiculeSubject.subscribe(
      (vehicules:Vehicule[])=>{
        this.vehicules = vehicules;
      }
    );
    this.vehiculeService.emitVehicules();
  }

  onNewVehicule(){
    this.router.navigate(['/vehicule', 'new']); // a verifier si faut pas faire sauter le route 'new'
  }

  onDeleteVehicule(vehicule: Vehicule){
    this.vehiculeService.removeVehicule(vehicule);
  }

  onViewVehicule(id: number){
    this.router.navigate(['/vehicule', 'view', id]); // a verifier si faut pas faire sauter le route 'view'
  }

  ngOnDestroy(){
    this.vehiculesSubscription.unsubscribe();
  }


}
