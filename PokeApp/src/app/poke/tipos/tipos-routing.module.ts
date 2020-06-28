import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposListaComponent } from './tipos-lista/tipos-lista.component';
import { TipoDetalleComponent } from './tipo-detalle/tipo-detalle.component';
import { PokemonsListaComponent } from './pokemons-lista/pokemons-lista.component';

const routes: Routes = [
	{ path: "lista", component: TiposListaComponent },
  { path: "detalle/:id", component: TipoDetalleComponent },
  { path: "pokemons/:idTipo", component: PokemonsListaComponent },
  { path: "", redirectTo: "lista", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposRoutingModule { }
