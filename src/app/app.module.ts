import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PolicyComponent } from './policy/policy.component';
import { RevenuComponent } from './revenu/revenu.component';
import { ListComponent } from './list/list.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { KmComponent } from './km/km.component';
import { RepasComponent } from './repas/repas.component';
import { HabitationComponent } from './habitation/habitation.component';
import { TutoComponent } from './tuto/tuto.component';
import { ArchiveComponent } from './archive/archive.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';


const appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'listing', component: ListComponent },
  {path: 'policy', component: PolicyComponent},
  {path: 'revenu', component: RevenuComponent},
  {path: 'vehicule', component: VehiculeComponent},
  {path: 'Km', component: KmComponent},
  {path: 'repas', component: RepasComponent},
  {path: 'habitation', component: HabitationComponent},
  {path: 'archive', component: ArchiveComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PolicyComponent,
    RevenuComponent,
    ListComponent,
    VehiculeComponent,
    KmComponent,
    RepasComponent,
    HabitationComponent,
    TutoComponent,
    ArchiveComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [
    AuthGuardService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
