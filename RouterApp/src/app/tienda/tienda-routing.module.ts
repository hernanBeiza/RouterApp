import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './productos/productos.component'; 
import { TiendaComponent } from './tienda/tienda.component'; 
import { CarroComponent } from './carro/carro.component'; 
import { DetalleComponent } from './detalle/detalle.component'; 
import { PagarComponent } from './pagar/pagar.component'; 

const routes: Routes = [
{
	path: "", component:TiendaComponent,
	children: [
		{ path:"productos", component:ProductosComponent },
		{ path:"detalle/:id", component:DetalleComponent },
		{ path:"carro", component:CarroComponent },
		{ path:"pagar", component:PagarComponent },
	]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
