import { Component, OnInit } from '@angular/core';
import { email } from 'src/app/models/email.model';
import { Subscription } from 'rxjs';
import { AdminMailService } from 'src/app/services/admin-mail.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  email: email[];
  // ajout pierre
  user:firebase.User;
  emailSubscription: Subscription;

  constructor(private adminMailService: AdminMailService, private router: Router) {}

  ngOnInit() {
    this.user = firebase.auth().currentUser;
  }

  deleteUser() {
    console.log ("ça passe bien ici");
    this.user.delete().then(function() {
      // User deleted.
    }).catch(function(error) {
      // An error happened.
    });
    

  }

  // mise à jour de l'utilisateur
  updateUser (email) {

    // je force la variable avec mon email pour être sur que je change pas vraiment
    email = "gregory.bannier@gmail.com";

    // mise à jour l'email du compte.
    this.user.updateEmail(email).then(function() {
      //  tout est ok = log du nouvel email
      console.log (firebase.auth().currentUser.email);
    }).catch(function(error) {
      // si erreur 
      console.log (error);
    });
  }

  onViewEmail(id: number) {
    this.router.navigate(['/email', 'view', id]);
  }
  
  ngOnDestroy() {
    this.emailSubscription.unsubscribe();
  }
}