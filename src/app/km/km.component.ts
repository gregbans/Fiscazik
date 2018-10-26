import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KmService } from '../services/km.service';
import { Router } from '@angular/router';
import { Km } from '../models/km.model';

@Component({
  selector: 'app-km',
  templateUrl: './km.component.html',
  styleUrls: ['./km.component.scss']
})
export class KmComponent implements OnInit, OnDestroy {
  Kms : Km[];
  kmsSubscription: Subscription;
  kmForm: FormGroup;
  
    constructor(private kmService: KmService,
                private router: Router,
                private formBuilder: FormBuilder,
                ) { }
  
    ngOnInit() {
      this.initForm();
      this.kmsSubscription = this.kmService.kmSubject.subscribe(
        (kms:Km[])=>{
          this.Kms = kms;
        }
      );
      this.kmService.getKms();
      this.kmService.emitkms();
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
  
    onSaveKm(){
      const trajet5000 = this.kmForm.get('trajet5000').value;
      const trajet5_20 = this.kmForm.get('trajet5_20').value;
      const trajet20 = this.kmForm.get('trajet20').value;
      this.router.navigate(['/listing']);
      }
  
  }
  