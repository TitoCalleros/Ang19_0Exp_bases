import { Component, signal } from '@angular/core';

import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './characterAdd.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  addCharacter(): void {
    if ( !this.name() || !this.power() || this.power() <= 0) {
      console.log('Valores inválidos');
      return;
    }
    const newCharacter: Character = {
      id: 0,
      name: this.name(),
      power: this.power()
    };

    console.log(`${ this.name() } - ${ this.power() }`);

    // Forma no recomendada.
    // this.characters().push(newCharacter);

    // Forma recomendada
    // this.characters.update( (list) => [...list, newCharacter])

    console.log({newCharacter})

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
