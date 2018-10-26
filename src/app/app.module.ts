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
import { VehiculeformComponent } from './car/vehiculeform/vehiculeform.component';
import { SinglevehiculeComponent } from './car/singlevehicule/singlevehicule.component';


const appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'listing', canActivate:[AuthGuardService], component: ListComponent },
  {path: 'policy', canActivate:[AuthGuardService], component: PolicyComponent},
  {path: 'revenu', canActivate:[AuthGuardService], component: RevenuComponent},
  {path: 'vehicule', canActivate:[AuthGuardService], component: VehiculeComponent},
  { path: 'vehicule/new', component: VehiculeformComponent },
  { path: 'vehicule/view/:id', component: SinglevehiculeComponent},
  {path: 'Km', canActivate:[AuthGuardService], component: KmComponent},
  {path: 'repas', canActivate:[AuthGuardService], component: RepasComponent},
  {path: 'habitation', canActivate:[AuthGuardService], component: HabitationComponent},
  {path: 'archive', canActivate:[AuthGuardService], component: ArchiveComponent},
  {path: '', redirectTo: 'listing', pathMatch: 'full'},
  {path: '**', redirectTo: 'listing'}
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
    HeaderComponent,
    VehiculeformComponent,
    SinglevehiculeComponent
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
