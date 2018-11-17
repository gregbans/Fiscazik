import { Component, OnInit, OnDestroy } from '@angular/core';
import { Vehicule } from '../models/vehicule.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { VehiculeService } from '../services/vehicule.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit, OnDestroy {

vehicules : Vehicule[] = [];
vehiculesSubscription: Subscription;
vehiculeForm: FormGroup;

  constructor(private vehiculeService: VehiculeService,
              private router: Router,
              private formBuilder: FormBuilder,
              ) { }

  ngOnInit() {
    this.initForm();
    this.vehiculeService.getVehicules().subscribe(
      (res: any) => {
        console.log(' vehiculeComponent ngOnInit res', res);
        this.vehicules = res;
      },
      (error: any)=>{
        console.log('vehiculeComponent ngOnInit error', error);
      }
    )
  }

  initForm(){
    this.vehiculeForm = this.formBuilder.group(
    {
    marque: ['', Validators.required],
    modele: ['', Validators.required],
    puissance: [+'', Validators.required],
    }
    )
    }

  // onNewVehicule(){
  //   this.router.navigate(['/vehicule', 'new']); // a verifier si faut pas faire sauter le route 'new'
  // }

  onDeleteVehicule(vehicule: Vehicule){
    this.vehiculeService.removeVehicule(vehicule);
  }

  // onViewVehicule(id: number){
  //   this.router.navigate(['/vehicule', 'view', id]); // a verifier si faut pas faire sauter le route 'view'
  // }

  ngOnDestroy(){
    this.vehiculesSubscription.unsubscribe();
  }

  onSaveVehicule(){
    const marque = this.vehiculeForm.get('marque').value;
    const modele = this.vehiculeForm.get('modele').value;
    const puissance = this.vehiculeForm.get('puissance').value;
    const newVehicule = new Vehicule(marque, modele, puissance );
    this.vehiculeService.addVehicule(newVehicule).subscribe
        (success => {
          console.log('vehiculecomponent addVehicule success');
          console.log(success);
          this.vehiculeService.getVehicules().subscribe(
            (res: any) => {
              console.log(' vehiculeComponent ngOnInit res', res);
              this.vehicules = res;
            },
            (error: any)=>{
              console.log('vehiculeComponent ngOnInit error', error);
            }
          )
      }, error => {
        console.log('vehiculecomponent addVehicule error');
        console.log(error);
      }
    );
  }

}
