import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgforComponent } from '../ngfor/ngfor.component';

@Component({
  selector: 'app-app2',
  standalone: true,
  imports: [CommonModule
  ,NgforComponent],
  template: `
  
   <div *ngFor="let wydarzenie of wydarzenia">
    <h1>{{wydarzenie.name}}</h1>
    <span *ngIf="!wydarzenie.location && wydarzenie.onlineUrl">Wydarzenie odbywa się tylko online</span>

    <div>Data: {{wydarzenie.date}}</div>
    <div>Godzina: {{wydarzenie.time}}</div>

    <div *ngIf="wydarzenie.location">
      <span>
        Lokalizacja: {{wydarzenie?.location?.address?.street}}
        Kraj: {{wydarzenie?.location?.address?.country}}
      </span>

    </div>

    <div *ngIf="wydarzenie.onlineUrl">
      OnlineUrl: {{wydarzenie?.onlineUrl}}
    </div>


   </div>
  `,
  styles: [
  ]
})
export class App2Component {
   wydarzenia = [ 
     {
      name: 'Konferencja 1',
      date: '04.10.2023',
      time: '19.00',
      location: {
        address: {
          street: 'Długa',
          street_number: 1,
          country: 'Poland',
          
        },
      },
      onlineUrl: 'https://xyz.pl'
      
     },
     {
      name: 'Konferencja 2',
      date: '14.10.2023',
      time: '19.00',
      location: {
        address: {
          street: 'Długa',
          street_number: 1,
          country: 'Poland',
          
        },
      },
      onlineUrl: 'https://xyz.pl'
      
     },
     {
      name: 'Konferencja 3',
      date: '14.10.2023',
      time: '19.00',
      onlineUrl: 'https://xyz.pl'
     }
  
  ]
}
