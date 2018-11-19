import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { promise } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAdmin: boolean = false;
  private subjectIsAdmin = new Subject<boolean>();
  private _isAuth: boolean = false;
  private subjectIsAuth = new Subject<boolean>();

  constructor() { }

// creation d'un nouvel utilisateur dans la db firebase
  createNewUser(email: string, password: string){
    return new Promise(
      (resolve, reject)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          ()=>{
            localStorage.setItem('email', email)
            resolve();
          },
          (error)=>{
            reject(error);
          }
        );
      }
    );
  }

// identification de l'utilisateur
  SignInUser(email: string, password: string){
  return new Promise(
    (resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        ()=>{
          if(email === 'gregory.bannier@gmail.com'){
            console.log("signin.component onSubmit isAdmin" )
            this._isAdmin = true;
            this.subjectIsAdmin.next(true);
          }else{
            this._isAdmin = false;
            this.subjectIsAdmin.next(false);
          }
          this._isAuth=true;
          this.subjectIsAuth.next(true);
          resolve();
        },
        (error)=>{
          this._isAuth=false;
          this.subjectIsAuth.next(false);
          reject(error);
        }
      );
    }
  );
}

// Deconnexion de l'utilisateur

  SignOutUser(){
    firebase.auth().signOut();
    this.subjectIsAdmin.next(false);
    this.subjectIsAuth.next(false);
  }

  getIsAdminSubject(){
    return this.subjectIsAdmin.asObservable();
  }

  getIsAdmin(){
    return this._isAdmin;
  }

  getIsAuthSubject(){
    return this.subjectIsAuth.asObservable();
  }

}