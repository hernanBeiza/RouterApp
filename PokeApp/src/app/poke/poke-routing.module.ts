import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeComponent } from './poke.component';

const routes: Routes = [
  { path: "", component: PokeComponent, children: [
    {
      path:"pokemons", 
      loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule),
    },
    {
      path:"tipos", 
      loadChildren: () => import('./tipos/tipos.module').then(m => m.TiposModule)
    },
    {
      path:"movimientos", 
      loadChildren: () => import('./movimientos/movimientos.module').then(m => m.MovimientosModule)
    },    
    {
      path:"habilidades", 
      loadChildren: () => import('./habilidades/habilidades.module').then(m => m.HabilidadesModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeRoutingModule { }
