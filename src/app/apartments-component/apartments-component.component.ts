import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from '../Core/Models/apartment';
import { Residence } from '../Core/Models/residence';
@Component({
  selector: 'app-apartments-component',
  templateUrl: './apartments-component.component.html',
  styleUrls: ['./apartments-component.component.css']
})
export class ApartmentsComponentComponent {
  residenceId!: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.residenceId = +params['residenceId'];
      this.filteredApartments = this.filterApartmentsByResidenceId(this.residenceId);
    });
  }

  filteredApartments!: Apartment[];
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg"},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg"},
    {id:4,"name": "El Anber","address":"Manzah 5",
    "image":"../../assets/images/R4.jpg"}
    ];

  listApartments:Apartment[]=[
    {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
    {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
    {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },
  ]

  private filterApartmentsByResidenceId(residenceId: number): Apartment[] {
    return this.listApartments.filter(apartment => apartment.residence.id === residenceId);
  }

  navigateToaddApartments(): void {
    // Navigate to 'apartments' route with the residence ID as a parameter
    this.router.navigate(['/form-apartment']);
  }


  navigateToDetailsApartments(appId: number): void {
    // Navigate to 'apartments' route with the residence ID as a parameter
    this.router.navigate(['/detailsapp', { appId: appId }]);
  }


}
