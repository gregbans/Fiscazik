import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehiculeService } from '../../services/vehicule.service';
import { Router } from '@angular/router';
import { Vehicule } from '../../models/vehicule.model';

@Component({
  selector: 'app-vehiculeform',
  templateUrl: './vehiculeform.component.html',
  styleUrls: ['./vehiculeform.component.scss']
})
export class VehiculeformComponent implements OnInit {

vehiculeForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private vehiculeservice: VehiculeService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
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

onSaveVehicule(){
  const marque = this.vehiculeForm.get('marque').value;
  const modele = this.vehiculeForm.get('modele').value;
  const puissance = this.vehiculeForm.get('puissance').value;
  const newVehicule = new Vehicule(marque, modele, puissance );
  this.vehiculeservice.createNewVehicule(newVehicule);
  this.router.navigate(['/vehicule']);
}

}
