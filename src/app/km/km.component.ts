import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KmService } from '../services/km.service';
import { Router } from '@angular/router';
import { Km } from '../models/km.model';
import { TransitService } from '../services/transit.service';
import { Frais } from '../models/frais.model';

@Component({
  selector: 'app-km',
  templateUrl: './km.component.html',
  styleUrls: ['./km.component.scss']
})
export class KmComponent implements OnInit, OnDestroy {
  Kms : Km[];
  kmsSubscription: Subscription;
  kmForm: FormGroup;


  actuelFrais : Frais = new Frais();

  lecalcul5=0;
  lecalcul5_20=0;
  lecalcul20=0;
  leresultat=0;
  
  constructor(private kmService: KmService,
              private router: Router,
              private formBuilder: FormBuilder,
              public transitService: TransitService) { 
    this.actuelFrais=transitService.getFrais();
  }
  
    ngOnInit() {
      this.initForm();
      this.kmsSubscription = this.kmService.kmSubject.subscribe(
        (kms:Km[])=>{
          this.Kms = kms;
        }
      );
      this.kmService.getKms();
      this.kmService.emitKms();
    }
  
    initForm(){
      this.kmForm = this.formBuilder.group(
      {
      trajet5000: [+'', Validators.required],
      trajet5_20: [+'', Validators.required],
      trajet20: [+'', Validators.required],
      }
      )}
  
    ngOnDestroy(){
      this.kmsSubscription.unsubscribe();
    }
  
    calculer() {
      this.lecalcul5 = Number(this.actuelFrais.montantFraisTransport.nbKmInf5) * 5;
      this.lecalcul5_20= Number(this.actuelFrais.montantFraisTransport.nbKm5_20) * 5;
      this.lecalcul20 =Number(this.actuelFrais.montantFraisTransport.nbKmSup20) * 5;
      
      this.leresultat = Number(this.actuelFrais.montantFraisTransport.nbKmInf5) + 
                        Number(this.actuelFrais.montantFraisTransport.nbKm5_20) +
                        Number(this.actuelFrais.montantFraisTransport.nbKmSup20);
      
      ;
    }


    onSaveKm(){
      const trajet5000 = this.kmForm.get('trajet5000').value;
      const trajet5_20 = this.kmForm.get('trajet5_20').value;
      const trajet20 = this.kmForm.get('trajet20').value;
      this.router.navigate(['/listing']);
      }
  
  }
  