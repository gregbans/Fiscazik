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
    
    // ajout pierre
    this.user = firebase.auth().currentUser;
    
    /*
    this.emailSubscription = this.adminMailService.emailSubject.subscribe(
      (email: email[]) => {
        this.email = email;
      }
    );
    this.adminMailService.emitEmail();
    */
  }

  deleteUser() {
    //this.adminMailService.deleteEmail(email);

    console.log ("ça passe bien ici");

    /*
    je laisse en commentaire sinon je vais effacer le compte, mais normalement ça marche comme il faut :)
    this.user.delete().then(function() {
      // User deleted.
    }).catch(function(error) {
      // An error happened.
    });
    */
    

  }

  // mise à jour de l'utilisateur
  updateUser (email) {

    // je force la variable avec ton email pour être sur que je change pas vraiment, mais tu peux le virer après
    email = "gregory.bannier@gmail.com";

    // ici je mets à jour l'email du compte.
    this.user.updateEmail(email).then(function() {
      // si tout est ok je fais un simple log du nouvel email
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