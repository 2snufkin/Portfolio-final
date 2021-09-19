import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {EducationComponent} from './education/education.component';
import {ProjectsComponent} from './projects/projects.component';
import {CompetencesComponent} from './competences/competences.component';
import {ContactComponent} from './contact/contact.component';
import {HeaderComponent} from './header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomeComponent} from './home/home.component';
import {FormsModule } from '@angular/forms';
import {DialogComponent} from './dialog/dialog.component';
 import {AngularFirestoreModule} from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    ProjectsComponent,
    CompetencesComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    DialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
