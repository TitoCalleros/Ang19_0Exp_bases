import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [ ],
  templateUrl: './dragonball-page.component.html',
  styles: ``
})
export class DragonballPageComponent {
  name = signal('');
  power = signal(0);

  public characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 3, name: 'Piccolo', power: 3500 },
    // { id: 4, name: 'Yamcha', power: 500 }
  ]);

  powerClasses = computed( () => {
    return {
      'text-danger': true,
    }
  } );

  addCharacter(): void {
    if ( !this.name() || !this.power() || this.power() <= 0) {
      console.log('Valores inválidos');
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    console.log(`${ this.name() } - ${ this.power() }`);

    // Forma no recomendada.
    // this.characters().push(newCharacter);

    // Forma recomendada
    this.characters.update( (list) => [...list, newCharacter])

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
