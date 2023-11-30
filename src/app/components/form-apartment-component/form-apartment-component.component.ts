import { Component } from '@angular/core';
import { Apartment } from '../../Core/Models/apartment';
import { Residence } from '../../Core/Models/residence';
@Component({
  selector: 'app-form-apartment-component',
  templateUrl: './form-apartment-component.component.html',
  styleUrls: ['./form-apartment-component.component.css']
})
export class FormApartmentComponentComponent {
  apartmentAdded: boolean = false;
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

    onSubmit(): void {
      this.apartmentAdded = true;
    }

}
