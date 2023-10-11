import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { PierwszyComponent } from './pierwszy/pierwszy.component';
import { DrugiComponent } from './drugi/drugi.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { App2Component } from './app2/app2.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
  PierwszyComponent,
DrugiComponent,
NgforComponent,
App2Component],
  template: `

    <app-app2></app-app2>
     <!-- ngStyle -->
     <div class="container" 
     [ngStyle]="{ 'background-color': bgcolor, 'color': fontcolor, 'font-size': fontsize }">Jakiś tekst</div>


     <nav [style.background-color]="red">Nawigacja</nav>



     <app-pierwszy></app-pierwszy>
     <app-drugi></app-drugi>
     <app-ngfor></app-ngfor>
   
  `,
  styles: [],
})
export class AppComponent  {

 bgcolor: string;
 fontcolor: string;
 fontsize: string;

 red = "red";
      constructor() {
        this.bgcolor = "#cbcbcb";
        this.fontcolor = "#000";
        this.fontsize = "20px";
      }
  


ngOnInit() {}


  
}
