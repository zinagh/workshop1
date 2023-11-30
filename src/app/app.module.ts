import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule } from '@angular/forms';
import { FormResidenceComponentComponent } from './form-residence-component/form-residence-component.component';
import { ApartmentsComponentComponent } from './apartments-component/apartments-component.component';
import { FormApartmentComponentComponent } from './form-apartment-component/form-apartment-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component'; // Import FormsModule
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: ResidencesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'addResidence', component: FormResidenceComponentComponent },
  { path: 'apartments', component: ApartmentsComponentComponent },
  { path: 'form-apartment', component: FormApartmentComponentComponent },
  { path: 'not-found', component: NotFoundComponentComponent },
  { path: '**', redirectTo: '/not-found' } // Redirect any unknown route to the not-found component
];

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    FormResidenceComponentComponent,
    ApartmentsComponentComponent,
    FormApartmentComponentComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
