import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

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
import { RepasDeplacementComponent } from './repas-deplacement/repas-deplacement.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { RepresentationComponent } from './representation/representation.component';
import { MaterielComponent } from './materiel/materiel.component';
import { CotisationComponent } from './cotisation/cotisation.component';
import { AutresFraisComponent } from './autres-frais/autres-frais.component';

import { ListingService } from './services/listing.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BaremesService } from './services/baremes.service';



const appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'listing', canActivate:[AuthGuardService], component: ListComponent },
  {path: 'policy', canActivate:[AuthGuardService], component: PolicyComponent},
  {path: 'tuto', canActivate:[AuthGuardService], component: TutoComponent},
  {path: 'revenu', canActivate:[AuthGuardService], component: RevenuComponent},
  {path: 'vehicule', canActivate:[AuthGuardService], component: VehiculeComponent},
  {path: 'Km', canActivate:[AuthGuardService], component: KmComponent},
  {path: 'repas', canActivate:[AuthGuardService], component: RepasComponent},
  {path: 'habitation', canActivate:[AuthGuardService], component: HabitationComponent},
  {path: 'archive', canActivate:[AuthGuardService], component: ArchiveComponent},
  {path: 'repas_dep', canActivate:[AuthGuardService], component: RepasDeplacementComponent},
  {path: 'documentation', canActivate:[AuthGuardService], component: DocumentationComponent},
  {path: 'representation', canActivate:[AuthGuardService], component: RepresentationComponent},
  {path: 'materiel', canActivate:[AuthGuardService], component: MaterielComponent},
  {path: 'cotisation', canActivate:[AuthGuardService], component: CotisationComponent},
  {path: 'autres_frais', canActivate:[AuthGuardService], component: AutresFraisComponent},
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
    RepasDeplacementComponent,
    DocumentationComponent,
    RepresentationComponent,
    MaterielComponent,
    CotisationComponent,
    AutresFraisComponent,
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
    ListingService,
    BaremesService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
