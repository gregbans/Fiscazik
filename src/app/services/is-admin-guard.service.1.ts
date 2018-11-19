import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        // firebase.auth().onAuthStateChanged(
          // (user)=>{
            if(this.authService.getIsAdmin()){
              resolve(true);
            }else{
              this.router.navigate(['/listing']);
              resolve(false);
            }
          // }
        // );
      }
    )
  }

}
