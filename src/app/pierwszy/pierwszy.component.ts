import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pierwszy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      pierwszy works!
    </p>
    <ng-template>
      <p>
        drugi  works!
      </p>
    </ng-template>

    <ng-template>
    <button class="tab-button" 
                  (click)="login()">{{loginText}}</button>
          <button class="tab-button" 
                  (click)="signUp()">{{signUpText}}</button>
    </ng-template>
    <ng-template [ngIf]="lessons" [ngIfElse]="loading">
       <div class="lessons-list">
         ... 
       </div>
    </ng-template>

    <ng-template #loading>
        <div>Loading...</div>
    </ng-template>

    <div *ngIf="lessons">
    <div class="lesson" *ngFor="let lesson of lessons">
        <div class="lesson-detail">
            {{lesson | json}}
        </div>
    </div>
</div>
   
  `,
  styles: [
  ]
})
export class PierwszyComponent {


  
    loginText = 'Login';
    signUpText = 'Sign Up'; 
    lessons = ['Lesson 1', 'Lessons 2'];
  
    login() {
        console.log('Login');
    }
  
    signUp() {
        console.log('Sign Up');
    }
    
}
