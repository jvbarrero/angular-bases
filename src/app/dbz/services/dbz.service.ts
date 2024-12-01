import { Injectable } from '@angular/core';
import { v7 as uuid7 } from 'uuid'

import { Character } from '../interfaces/Character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid7(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid7(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid7(),
      name: 'Vegeta',
      power: 7500
    }
  ]

  addCharacter(character: Character): void{
    const newCharacter: Character = { ...character, id: uuid7() }
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void{
    //this.characters.splice(id, 1);
    this.characters = this.characters.filter(item => item.id != id);
  }

}
