import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovimientosListaComponent } from './movimientos-lista/movimientos-lista.component';
import { MovimientoDetalleComponent } from './movimiento-detalle/movimiento-detalle.component';

const routes: Routes = [
	{ path: "lista", component: MovimientosListaComponent },
  { path: "detalle/:idMovimiento", component: MovimientoDetalleComponent },
  { path: "", redirectTo: "lista", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimientosRoutingModule { }
