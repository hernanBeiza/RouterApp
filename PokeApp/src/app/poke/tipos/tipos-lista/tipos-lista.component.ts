import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { TipoService } from './../../../services';
import { Tipo } from './../../../models';

@Component({
  selector: 'app-tipos-lista',
  templateUrl: './tipos-lista.component.html',
  styleUrls: ['./tipos-lista.component.scss']
})
export class TiposListaComponent implements OnInit {
  faChevronRight = faChevronRight;

	public tipos:Array<Tipo>;

  public flagCargando:boolean = false;

  constructor(private router:Router, private tipoService:TipoService) { }

  ngOnInit() {
  	this.cargarTipos();
  }

  private cargarTipos():void {
    this.flagCargando = true;
  	this.tipoService.obtener().subscribe(data=>{
  		console.log(data);
      this.flagCargando = false;
  		if(data){
	  		this.tipos = data;  			
  		}
  	},error=>{
      this.flagCargando = false;
  		console.error(error);
  	});
  }

  public verPokemonesDeTipo(tipo:Tipo):void {
    console.log(tipo);
    this.router.navigate(["poke/tipos/pokemons",tipo.id]);
  }

  public verDetalle(tipo:Tipo):void {
  	console.log(tipo);
    this.router.navigate(["poke/tipos/detalle",tipo.id]);
  }
  
}
