import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { TiendaComponent } from './tienda/tienda.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CarroComponent } from './carro/carro.component';
import { PagarComponent } from './pagar/pagar.component';
import { MenuComponent } from './menu/menu.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [TiendaComponent, ProductosComponent, DetalleComponent, CarroComponent, PagarComponent, MenuComponent],
  imports: [
    CommonModule,
    TiendaRoutingModule,
  ]
})
export class TiendaModule { }
