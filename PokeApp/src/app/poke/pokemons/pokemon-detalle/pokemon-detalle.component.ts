import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { PokemonService } from './../../../services';
import { Estadistica, Habilidad, Movimiento, Pokemon } from './../../../models';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.scss']
})
export class PokemonDetalleComponent implements OnInit {
	faChevronRight = faChevronRight;
	
	public pokemon:Pokemon;

  public flagCargando:boolean = false;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private pokemonService:PokemonService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(urlParams => {
    	//Siendo id el nombre del parámetro seteado con :id en tienda-routing.module.ts
    	if(urlParams.idPokemon){
		    this.pokemon = new Pokemon();
		    this.pokemon.id = parseInt(urlParams.idPokemon);
    	}
    });

  	this.cargarDetalle();
  }

  private cargarDetalle():void {
    this.flagCargando = true;
  	this.pokemonService.obtenerDetalle(this.pokemon).subscribe(data=>{
      console.log(data);
  		if(data){
	  		this.pokemon = data;
  		}
      this.flagCargando = false;
  	},error=>{
      this.flagCargando = false;
  		console.error(error);
  	});
  }

  public verDetalle(pokemon:Pokemon):void {
    console.log(pokemon);
  }

  public verMovimiento(movimiento:Movimiento):void {
    console.log(movimiento);
    this.router.navigate(["poke/movimientos/detalle/",movimiento.id]);
  }

  public verHabilidad(habilidad:Habilidad):void {
    console.log(habilidad);
    this.router.navigate(["poke/habilidades/detalle/",habilidad.id]);
  }

}

