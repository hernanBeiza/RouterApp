import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';
import { PokemonsListaComponent } from './pokemons-lista/pokemons-lista.component';


@NgModule({
  declarations: [PokemonDetalleComponent, PokemonsListaComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PokemonsRoutingModule
  ]
})
export class PokemonsModule { }