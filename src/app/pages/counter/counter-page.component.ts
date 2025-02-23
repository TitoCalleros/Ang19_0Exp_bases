import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: [
    './counter-page.component.css'
  ]
})
export class CounterPageComponent {
  counter = 10;

  // Implementación de signals
  counterSignal = signal(10);

  increaseBy(value: number): void {
    this.counter += value;
    // Forma errónea de actualizar una señal
    // this.counterSignal.set( this.counterSignal() + value);

    // Forma correcta de actualizar una señal
    this.counterSignal.update( current => current + value );
  }

  reset(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
