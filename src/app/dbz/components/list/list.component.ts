import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteCharacterItem: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    this.onDeleteCharacterItem.emit(id);
  }

}
