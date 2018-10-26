import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService) { }

  // pour que l'utilisateur se connecte
  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user)=>{
        if(user){
          this.isAuth = true;
        }else{
          this.isAuth = false;
        }
      }
    );
  }

  // pour que l'utilisateur se deconnecte
  onSignOut (){
    this.authService.SignOutUser();
  }



}
