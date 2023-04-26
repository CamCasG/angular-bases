import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter( character: Character ):void {

    //utilizar el operador spread del character y con esto digo toma todas sus propiedades y esparcelas dentro
    //del objeto que estoy creando. Esto sirve ya que no sabemos cuantas propiedades pueda tener un pj
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter( index:number ):void {
  //   this.characters.splice(index,1);
  deleteCharacterById ( id:string ) {
    this.characters = this.characters.filter ( character => character.id !== id );
  }




}
