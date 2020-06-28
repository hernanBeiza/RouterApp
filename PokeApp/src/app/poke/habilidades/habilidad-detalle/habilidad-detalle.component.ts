import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { HabilidadService } from './../../../services';
import { Estadistica, Habilidad, Movimiento, Pokemon } from './../../../models';

@Component({
  selector: 'app-habilidad-detalle',
  templateUrl: './habilidad-detalle.component.html',
  styleUrls: ['./habilidad-detalle.component.scss']
})
export class HabilidadDetalleComponent implements OnInit {
  faChevronRight = faChevronRight;

	public habilidad:Habilidad;

  public flagCargando:boolean = false;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private habilidadService:HabilidadService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(urlParams => {
    	//Siendo id el nombre del parámetro seteado con :id en tienda-routing.module.ts
    	if(urlParams.idHabilidad){
		    this.habilidad = new Habilidad();
		    this.habilidad.id = parseInt(urlParams.idHabilidad);
    	}
    });

  	this.cargarDetalle();
  }

  private cargarDetalle():void {
    this.flagCargando = true;
    this.habilidadService.obtenerDetalle(this.habilidad).subscribe(data=>{
      console.log(data);
  		if(data){
	  		this.habilidad = data;
  		}
      this.flagCargando = false;
  	},error=>{
      this.flagCargando = false;
  		console.error(error);
  	});
  }

  public verDetallePokemon(pokemon:Pokemon):void {
    console.log(pokemon);
    this.router.navigate(["poke/pokemons/detalle",pokemon.id]);
  }
  


}