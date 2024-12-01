import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/Character.interface';

@Component({
  selector: 'app-dbz-main-name',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService) { }

  get characters(): Character[] {
    // Crea una copia de todos los elementos
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

}
