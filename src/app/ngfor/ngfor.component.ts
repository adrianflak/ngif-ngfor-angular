import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table>
      <thead>
        <th>Lp.</th>
        <th>Imię</th>
        <th>Nazwisko</th>
        <th>Miasto</th>
      </thead>
      <tbody>
        <tr *ngFor="let place of places">
          <td>{{place.number}}</td>
          <td>{{place.name}}</td>
          <td>{{place.surname}}</td>
          <td>{{place.city}}</td>
          <td>{{place.address?.street}}</td>
          <!-- <td>{{place.address?.street.number}}</td> -->
        </tr>
      </tbody>
    </table>
  `,
  styles: [
  ]
})
export class NgforComponent {

   places = [
    {
      number: 1,
      name: 'Jan',
      surname: 'Kowalski',
      city: 'Warszawa',
      address: {
        street: 'Długa',
        street_number: 54
      }
    },
    {
      number: 2,
      name: 'Adam',
      surname: 'Kowalski',
      city: 'Katowice'
    },
    {
      number: 3,
      name: 'Robert',
      surname: 'Kowalski',
      city: 'Gdańsk',
      address: {
        street: 'Krótka',
        street_number: 14
      }
    }
  ]

}
