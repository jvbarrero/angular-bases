import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <hr>
    <h3>Counter: {{counter}} </h3>
    <button (click)="increaseBy(1)" >+1</button>
    <button (click)="reset()" >Reset</button>
    <button (click)="increaseBy(-1)" >-1</button>
  `
})

export class CounterComponent {
  public default: number = 10;
  public counter: number = this.default;

  increaseBy (value: number):void {
    this.counter += value;
  }

  reset (): void {
    this.counter = this.default;
  }

}
