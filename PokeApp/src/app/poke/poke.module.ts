import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PokeRoutingModule } from './poke-routing.module';
import { PokeComponent } from './poke.component';


@NgModule({
  declarations: [PokeComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PokeRoutingModule
  ]
})
export class PokeModule { }
