import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [ ],
  templateUrl: './dragonball-super-page.component.html',
  styles: ``
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  public characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
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
