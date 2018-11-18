import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor() { }

  isAdmin: Boolean;

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
          resolve();
        },
        (error)=>{
          reject(error);
        }
      );
    }
  );
}

// Deconnexion de l'utilisateur

  SignOutUser(){
    firebase.auth().signOut();
  }


  SignAdmin(email: string, isAuth: boolean){
    if(isAuth == true && email == "gregory.bannier@gmail.com"){
      this.isAdmin = true;
    }
  }

}