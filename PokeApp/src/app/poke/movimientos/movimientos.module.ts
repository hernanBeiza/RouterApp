import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimientosRoutingModule } from './movimientos-routing.module';

import { MovimientoDetalleComponent } from './movimiento-detalle/movimiento-detalle.component';
import { MovimientosListaComponent } from './movimientos-lista/movimientos-lista.component';

@NgModule({
  declarations: [MovimientoDetalleComponent, MovimientosListaComponent],
  imports: [
    CommonModule,
    MovimientosRoutingModule
  ]
})
export class MovimientosModule { }
