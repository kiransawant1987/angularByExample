import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h2>Guess the Number!</h2>
  <div class="card bg-light mb-3">
    <div class="card-body">
      <p>Guess computer generated randome number between 1 and 1000</p>
      <label>Your guess:</label>
      <input type="number" [value]="guess" (input)="guess=$event.target.value">
      <button class="btn btn-primary btn-sm" (click)="verifyGuess()">Verify</button>
      <button class="btn btn-warning btn-sm" (click)="initializeGame()">Restart</button>
    </div>
  </div>
  <p *ngIf="deviation<0" class="alert alert-warning">Your guess is lower.</p>
  <p *ngIf="deviation>0" class="alert alert-warning">Your guess is higher.</p>
  <p *ngIf="deviation===0" class="alert alert-success">Yes..that's it.</p>
  <p class="text-info">No of Guesses:
    <span class="badge">
      {{noOfTries}}
    </span>
  </p>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guessthenumber';

  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;

  constructor() {
    this.initializeGame();
  }

  initializeGame() {
    debugger;
    this.noOfTries = 0;
    this.original = Math.floor((Math.random() * 1000) + 1);
    this.guess = null;
    this.deviation = null;
  }

  verifyGuess() {
    this.deviation = this.original - this.guess;
    this.noOfTries = this.noOfTries + 1;
  }

}
