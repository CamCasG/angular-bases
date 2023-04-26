import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DbzComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';


@NgModule({
  declarations: [
    DbzComponent,
    ListComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DbzComponent
  ]
})
export class DbzModule { }
