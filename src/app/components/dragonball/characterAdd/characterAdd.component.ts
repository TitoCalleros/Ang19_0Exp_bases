import { Component, output, signal } from '@angular/core';

import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './characterAdd.component.html',
})
export class CharacterAddComponent {
  newCharacter = output<Character>();

  name = signal('');
  power = signal(0);

  addCharacter(): void {
    if ( !this.name() || !this.power() || this.power() <= 0) {
      console.log('Valores inválidos');
      return;
    }
    const myNewCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    };

    this.newCharacter.emit(myNewCharacter);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
