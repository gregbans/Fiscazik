import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Km } from '../models/km.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class KmService {

    kms: Km[]= [];
    kmSubject = new Subject <Km[]>()
    
      constructor() { }
    
    emitKms(){
      this.kmSubject.next(this.kms);
    }
    
    saveKms(){
      firebase.database().ref('/kms').set(this.kms);
    }
    
    getKms(){
      firebase.database().ref('/kms')
        .on('value', (data)=>{
          this.kms = data.val() ? data.val() : [];
          this.emitKms();
      });
    }
      
    }
    