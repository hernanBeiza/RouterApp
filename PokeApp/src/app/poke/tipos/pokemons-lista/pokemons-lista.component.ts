import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { faChevronLeft, faChevronRight, } from '@fortawesome/free-solid-svg-icons';

import { TipoService, PokemonService } from './../../../services';
import { Tipo, Pokemon } from './../../../models';

@Component({
  selector: 'app-pokemons-lista',
  templateUrl: './pokemons-lista.component.html',
  styleUrls: ['./pokemons-lista.component.scss']
})
export class PokemonsListaComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

	public pokemons:Array<Pokemon>;
	public tipo:Tipo;

  public flagCargando:boolean = false;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, 
  	private tipoService:TipoService, private pokemonService:PokemonService) { }

  ngOnInit() {
  	 this.activatedRoute.params.subscribe(urlParams => {
    	//Siendo id el nombre del parámetro seteado con :id en tienda-routing.module.ts
    	if(urlParams.idTipo){
		    this.tipo = new Tipo();
		    this.tipo.id = parseInt(urlParams.idTipo);
    	}
    });
  	this.cargarPokemonsDeTipo();
  }

  private cargarPokemonsDeTipo():void {
    this.flagCargando = true;
    this.tipoService
    this.tipoService.obtenerPokemonesDeTipo(this.tipo).subscribe(data=>{
    	console.log(data);
      this.flagCargando = false;
      if(data){
        this.pokemons = data        
      }
    },error=> {
    	console.error(error);
      this.flagCargando = false;
    });
    /*
  	this.tipoService.obtener().subscribe(data=>{
  		console.log(data);
      this.flagCargando = false;
  		if(data){
	  		this.tipos = data.results;  			
  		}
  	},error=>{
      this.flagCargando = false;
  		console.error(error);
  	});
  	*/
  }

  public verDetallePokemon(pokemon:Pokemon):void {
    console.log(pokemon);
    this.router.navigate(["poke/pokemons/detalle",pokemon.id]);
  }
  
}