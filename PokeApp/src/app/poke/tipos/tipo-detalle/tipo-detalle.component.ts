import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { TipoService } from './../../../services';
import { Tipo, Movimiento } from './../../../models';

@Component({
  selector: 'app-tipo-detalle',
  templateUrl: './tipo-detalle.component.html',
  styleUrls: ['./tipo-detalle.component.scss']
})
export class TipoDetalleComponent implements OnInit {
  faChevronRight = faChevronRight;

	public tipo:Tipo;

  public flagCargando:boolean = false;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private tipoService:TipoService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(urlParams => {
    	//Siendo id el nombre del parámetro seteado con :id en tienda-routing.module.ts
    	if(urlParams.id){
		    this.tipo = new Tipo();
		    this.tipo.id = parseInt(urlParams.id);
    	}
    });

  	this.cargarDetalle();
  }

  private cargarDetalle():void {
    this.flagCargando = true;
  	this.tipoService.obtenerDetalle(this.tipo).subscribe(data=>{
      console.log(data);
  		if(data){
	  		this.tipo = data;  			
  		}
      this.flagCargando = false;
  	},error=>{
      this.flagCargando = false;
  		console.error(error);
  	});
  }

  public verMovimiento(movimiento:Movimiento):void {
    console.log(movimiento);
  }


}

