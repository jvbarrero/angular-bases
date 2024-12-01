import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListHeroesComponent {

  public heroesNames: string[] = ['Spiderman', 'Ironman', 'Hulk',' Thor'];
  public deletedHeroe?: string;

  removeLastHero(): void{
    this.deletedHeroe = this.heroesNames.pop();
  }

}
