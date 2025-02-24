import { Component, computed, signal } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/characterAdd/characterAdd.component";

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styles: ``
})
export class DragonballSuperPageComponent {

  public characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  powerClasses = computed( () => {
    return {
      'text-danger': true,
    }
  } );



}
