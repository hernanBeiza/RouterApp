import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TiposRoutingModule } from './tipos-routing.module';
import { TipoDetalleComponent } from './tipo-detalle/tipo-detalle.component';
import { TiposListaComponent } from './tipos-lista/tipos-lista.component';
import { PokemonsListaComponent } from './pokemons-lista/pokemons-lista.component';

@NgModule({
  declarations: [TipoDetalleComponent, TiposListaComponent, PokemonsListaComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TiposRoutingModule
  ]
})
export class TiposModule { }
