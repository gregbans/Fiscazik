import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuth: boolean;
  isAuthSubscrption : Subscription;
  isAdmin: boolean;
  isAdminSubscrption : Subscription;

  constructor(private authService: AuthService) { 
    // this.isAdmin = this.authService.getIsAdmin();
    // this.isAuth = this.authService.getIsAuth();
    this.isAdminSubscrption = this.authService.getIsAdminSubject().subscribe(_isAdmin=>{
      this.isAdmin = _isAdmin
    })
    this.isAuthSubscrption = this.authService.getIsAuthSubject().subscribe(_isAuth=>{
      this.isAuth = _isAuth
    })
  }

  // pour que l'utilisateur se connecte
  ngOnInit() {
    // firebase.auth().onAuthStateChanged(
    //   (user)=>{
    //     if(user){
    //       this.isAuth = true;
    //     }else{
    //       this.isAuth = false;
    //     }
    //   }
    // );
  }

  ngOnDestroy(){
  this.isAdminSubscrption.unsubscribe();
  this.isAuthSubscrption.unsubscribe();
  }

  // pour que l'utilisateur se deconnecte
  onSignOut (){
    this.authService.SignOutUser();
    localStorage.removeItem("sauvegardeFrais" + localStorage.getItem('email'));
    localStorage.removeItem("email");
  }



}
