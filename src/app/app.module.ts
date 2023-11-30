import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './components/residences/residences.component';
import { FormsModule } from '@angular/forms';
import { FormResidenceComponentComponent } from './components/form-residence-component/form-residence-component.component';
import { ApartmentsComponentComponent } from './components/apartments-component/apartments-component.component';
import { FormApartmentComponentComponent } from './components/form-apartment-component/form-apartment-component.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component'; // Import FormsModule
import { Routes, RouterModule } from '@angular/router';
import { DetailAppartmentComponentComponent } from './components/detail-appartment-component/detail-appartment-component.component';

const routes: Routes = [
  { path: 'home', component: ResidencesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'addResidence', component: FormResidenceComponentComponent },
  { path: 'apartments', component: ApartmentsComponentComponent },
  { path: 'form-apartment', component: FormApartmentComponentComponent },
  { path: 'not-found', component: NotFoundComponentComponent },
  { path: 'detailsapp', component: DetailAppartmentComponentComponent },
  { path: '**', redirectTo: '/not-found' } // Redirect any unknown route to the not-found component
];

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    FormResidenceComponentComponent,
    ApartmentsComponentComponent,
    FormApartmentComponentComponent,
    NotFoundComponentComponent,
    DetailAppartmentComponentComponent
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
