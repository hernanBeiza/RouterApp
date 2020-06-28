import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HabilidadesRoutingModule } from './habilidades-routing.module';

import { HabilidadDetalleComponent } from './habilidad-detalle/habilidad-detalle.component';

@NgModule({
  declarations: [HabilidadDetalleComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HabilidadesRoutingModule
  ]
})
export class HabilidadesModule { }
