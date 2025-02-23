
import { UpperCasePipe } from '@angular/common';
import { Component, computed, Signal, signal } from '@angular/core';


@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  public name = signal('Ironman');
  public age = signal(45);

  public heroDescription = computed( () => `${ this.name() } - ${ this.age() }`)

  // getHeroDescription(): string {
  //   return `${ this.name() } - ${ this.age() }`
  // }

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(): void {
    this.age.set(60);
  }

}
