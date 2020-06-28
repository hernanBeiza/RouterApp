import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { MovimientoService } from './../../../services';
import { Estadistica, Habilidad, Movimiento, Pokemon } from './../../../models';

@Component({
  selector: 'app-movimiento-detalle',
  templateUrl: './movimiento-detalle.component.html',
  styleUrls: ['./movimiento-detalle.component.scss']
})
export class MovimientoDetalleComponent implements OnInit {
	faChevronRight = faChevronRight;
	
	public movimiento:Movimiento;

  public flagCargando:boolean = false;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private movimientoService:MovimientoService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(urlParams => {
    	//Siendo id el nombre del parámetro seteado con :id en tienda-routing.module.ts
    	if(urlParams.idMovimiento){
		    this.movimiento = new Movimiento();
		    this.movimiento.id = parseInt(urlParams.idMovimiento);
    	}
    });

  	this.cargarDetalle();
  }

  private cargarDetalle():void {
    this.flagCargando = true;
    this.movimientoService.obtenerDetalle(this.movimiento).subscribe(data=>{
      console.log(data);
  		if(data){
	  		this.movimiento = data;
  		}
      this.flagCargando = false;
  	},error=>{
      this.flagCargando = false;
  		console.error(error);
  	});
  }

}