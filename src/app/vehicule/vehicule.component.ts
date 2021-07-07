import { Component, OnInit, OnDestroy } from '@angular/core';
import { Vehicule } from '../models/vehicule.model';
import { Observable } from 'rxjs';
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
vehiculeForm: FormGroup;

  constructor(private vehiculeService: VehiculeService,
              private router: Router,
              private formBuilder: FormBuilder,
              ) { }

  ngOnInit() {
    this.initForm();
    this.refreshVehicules();
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

  deleteVehicule(vehicule: Vehicule){
    this.vehiculeService.deleteVehicule(vehicule).subscribe (
      success => {
      console.log('vehiculeservice deleteVehicule success');
      console.log(success);
      this.refreshVehicules();
      // observer.next(success);
      // observer.complete();
    }, error => {
      console.log('vehiculeservice deleteVehicule error');
      console.log(error);
    // observer.error(error);
    });
  }

  ngOnDestroy(){
  }

  onSaveVehicule(){
    const marque = this.vehiculeForm.get('marque').value;
    const modele = this.vehiculeForm.get('modele').value;
    const puissance = this.vehiculeForm.get('puissance').value;
    const newVehicule = new Vehicule(null, marque, modele, puissance );
    this.vehiculeService.addVehicule(newVehicule).subscribe
        (success => {
          console.log('vehiculecomponent addVehicule success');
          console.log(success);
          this.refreshVehicules();
      }, error => {
        console.log('vehiculecomponent addVehicule error');
        console.log(error);
      }
    );
  }

  refreshVehicules(){
    this.vehiculeService.getVehicules().subscribe(
      (res: any) => {
        this.vehicules = res;
        console.log('vehiculeComponent ngOnInit vehicules', this.vehicules);
      },
      (error: any)=>{
        console.log('vehiculeComponent ngOnInit error', error);
      }
    )
  }

}
