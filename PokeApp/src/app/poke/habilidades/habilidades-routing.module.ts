import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilidadDetalleComponent } from './habilidad-detalle/habilidad-detalle.component';

const routes: Routes = [
  { path: "detalle/:idHabilidad", component: HabilidadDetalleComponent },
  { path: "", redirectTo: "lista", pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabilidadesRoutingModule { }
