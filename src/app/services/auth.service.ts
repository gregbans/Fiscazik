import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { promise } from 'protractor';
import { Subject } from 'rxjs';
import { TransitService } from './transit.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAdmin: boolean = false;
  private subjectIsAdmin = new Subject<boolean>();
  private _isAuth: boolean = false;
  private subjectIsAuth = new Subject<boolean>();

  constructor(private transitService : TransitService) { 
  }

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

// identification de l'utilisateur - couplé au mode admin selon email
  SignInUser(email: string, password: string){
  return new Promise(
    (resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        ()=>{
          if(email === 'gregory.bannier@gmail.com'){
            console.log("signin.component onSubmit isAdmin" )
            this._isAdmin = true;
            localStorage.setItem("_isAdmin", "true")
            this.subjectIsAdmin.next(true);
          }else{
            this._isAdmin = false;
            localStorage.setItem("_isAdmin", "false")
            this.subjectIsAdmin.next(false);
          }
          this._isAuth=true;
          localStorage.setItem("_isAuth", "true");
          this.subjectIsAuth.next(true);
          localStorage.setItem('email', email);
          this.transitService.init(true);
          resolve();
        },
        (error)=>{
          this.subjectIsAdmin.next(false);
          this.subjectIsAuth.next(false);
          this._isAdmin = false;
          localStorage.setItem("_isAdmin", "false")
          this._isAuth = false;
          localStorage.setItem("_isAuth", "false")
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
    this._isAdmin = false;
    localStorage.setItem("_isAdmin", "false");
    this._isAuth = false;
    localStorage.setItem("_isAuth", "false");
    this.transitService.reset();
  }

  getIsAdminSubject(){
    return this.subjectIsAdmin.asObservable();
  }

  getIsAdmin(){
    return this._isAdmin;
  }

  getIsAuth(){
    return this._isAuth;
  }

  getIsAuthSubject(){
    return this.subjectIsAuth.asObservable();
  }

}