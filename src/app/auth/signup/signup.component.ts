import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

signUpForm: FormGroup;
errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,) { }

  ngOnInit() {
    this.initForm();
  }

  // Méthode pour initialiser le formulaire
  initForm(){
    this.signUpForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
      // Password doit contenir au moins 6 caracteres de type Alpha-Numerique avec la Regexp
    })
  }

  onSubmit(){
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    this.authService.createNewUser(email, password).then(
      ()=> {
        this.router.navigate(['/listing']);
      },
      (error)=>{
        this.errorMessage = error;
      }
    );
  }

}
