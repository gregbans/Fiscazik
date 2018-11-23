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

//   deleteVehicule(vehicule: Vehicule): Observable<any[]>{
//     this.vehiculeService.deleteVehicule(vehicule).subscribe
//     (success => {
//       console.log('vehiculeservice deleteVehicule success');
//       console.log(success);
//       observer.next(success);
//       observer.complete();
//   }, error => {
//     console.log('vehiculeservice deleteVehicule error');
//       console.log(error);
//       observer.error(error);
//   }
// );
//   }

  ngOnDestroy(){
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
