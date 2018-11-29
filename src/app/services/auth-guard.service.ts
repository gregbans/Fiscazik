import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        if(localStorage.getItem("_isAuth") == "true"){
          resolve(true);
        }else{
          this.router.navigate(['/auth', 'signin']);
          resolve(false);
        }
        // firebase.auth().onAuthStateChanged(
        //   (user)=>{
        //     console.log("auth-guard.service canActivate if result", user )
        //     if(user){
        //       resolve(true);
        //     }else{
        //       this.router.navigate(['/auth', 'signin']);
        //       resolve(false);
        //     }
        //   }
        // );
      }
    )
  }

}
