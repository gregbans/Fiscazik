import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (){
    var config = {
      apiKey: "AIzaSyBNULxmXr_7ORdjUaclOV4NAPOw-RKpZJM",
      authDomain: "fiscazik-ef9ac.firebaseapp.com",
      databaseURL: "https://fiscazik-ef9ac.firebaseio.com",
      projectId: "fiscazik-ef9ac",
      storageBucket: "",
      messagingSenderId: "907627561708"
    };
    firebase.initializeApp(config);
  }
}
