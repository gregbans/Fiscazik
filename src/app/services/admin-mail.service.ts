import { Injectable } from '@angular/core';
import { email } from '../models/email.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AdminMailService {

    email: email[]= [];
    emailSubject = new Subject <email[]>()
    
      constructor() { }
    
    emitEmail(){
      this.emailSubject.next(this.email);
    }
    
    saveEmail(){
      firebase.database().ref('/admin_users').set(this.email);
    }
    
    getEmail(){
      firebase.database().ref('/admin_users')
        .on('value', (data)=>{
          this.email = data.val() ? data.val() : [];
          this.emitEmail();
      });
    }

    deleteEmail(email: email) {
        const emailIndexToRemove = this.email.findIndex(
          (emailEl) => {
            if(emailEl === email) {
              return true;
            }
          }
        );
        this.email.splice(emailIndexToRemove, 1);
        this.saveEmail();
        this.emitEmail();
      }
      
    }