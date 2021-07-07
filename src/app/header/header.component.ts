import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) { 
      // pour que l'utilisateur se connecte
    this.isAdminSubscrption = this.authService.getIsAdminSubject().subscribe(_isAdmin=>{
      this.isAdmin = _isAdmin
    })
    this.isAuthSubscrption = this.authService.getIsAuthSubject().subscribe(_isAuth=>{
      this.isAuth = _isAuth
    })
    if(localStorage.getItem("_isAuth")== "true" ){
      this.isAuth=true;
    }
    if(localStorage.getItem("_isAdmin")== "true" ){
      this.isAdmin=true;
    }
  }

  ngOnInit() {
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
    this.router.navigate(['/auth/signin']);
  }



}
