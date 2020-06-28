import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { PokemonService } from './../../../services';
import { Pokemon } from './../../../models';

@Component({
  selector: 'app-pokemons-lista',
  templateUrl: './pokemons-lista.component.html',
  styleUrls: ['./pokemons-lista.component.scss']
})
export class PokemonsListaComponent implements OnInit {

	public pokemon:Pokemon;

  public flagCargando:boolean = false;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private pokemonService:PokemonService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(urlParams => {
    	//Siendo id el nombre del parámetro seteado con :id en tienda-routing.module.ts
    	if(urlParams.id){
		    this.pokemon = new Pokemon();
		    this.pokemon.id = parseInt(urlParams.id);
    	}
    });

  	this.cargarDetalle();
  }

  private cargarDetalle():void {
    this.flagCargando = true;
    /*
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
    */
  }

  public verDetalle(pokemon:Pokemon):void {
    console.log(pokemon);
  }

}