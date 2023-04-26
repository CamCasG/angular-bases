import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzComponent {

  //habilitar en todo mi componente del mainpage , toda la info que esté siendo utilizada en el servicio
  constructor( public dbzService: DbzService ) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id:string):void {
    this.dbzService.deleteCharacterById ( id)
  }

  onNewCharacter ( character: Character ): void {
    this.dbzService.addCharacter ( character );
  }


}
