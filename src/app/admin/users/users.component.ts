import { Component, OnInit } from '@angular/core';
import { email } from 'src/app/models/email.model';
import { Subscription } from 'rxjs';
import { AdminMailService } from 'src/app/services/admin-mail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  email: email[];
  emailSubscription: Subscription;

  constructor(private adminMailService: AdminMailService, private router: Router) {}

  ngOnInit() {
    this.emailSubscription = this.adminMailService.emailSubject.subscribe(
      (email: email[]) => {
        this.email = email;
      }
    );
    this.adminMailService.emitEmail();
  }

  deleteEmail(email) {
    this.adminMailService.deleteEmail(email);
  }

  onViewEmail(id: number) {
    this.router.navigate(['/email', 'view', id]);
  }
  
  ngOnDestroy() {
    this.emailSubscription.unsubscribe();
  }
}