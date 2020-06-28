import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsListaComponent } from './pokemons-lista/pokemons-lista.component';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';

const routes: Routes = [
	{ path: "lista/:idTipo", component: PokemonsListaComponent },
  { path: "detalle/:idPokemon", component: PokemonDetalleComponent },
  { path: "", redirectTo: "lista", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
