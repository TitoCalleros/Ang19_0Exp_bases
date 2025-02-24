import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [ ],
  templateUrl: './dragonball-page.component.html',
  styles: ``
})
export class DragonballPageComponent {

  public characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 3500 },
    { id: 4, name: 'Yamcha', power: 500 }
  ]);

  powerClasses = computed( () => {
    return {
      'text-danger': true,
    }
  } );

}
