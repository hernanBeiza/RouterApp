import { Injectable } from '@angular/core';

import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaderResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map,tap} from 'rxjs/operators';

import { Estadistica, Habilidad, Movimiento, Pokemon, Tipo } from './../models/';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = environment.API+"pokemon/";
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  /*
  public obtener(): Observable<any> {
    return this.http.get<any>(this.url,this.httpOptions)
    .pipe(tap(data=>console.log(data)))
  	.pipe(map(data=> {
    	//console.log(data);
    	let pokemons = data.results.map(item=> {
        //seteos que deberían hacerse
        let pokemon = new Pokemon(item);
        pokemon.id = this.obtenerIdDesdeUrl(item.url);
        return pokemon;
      });
    	//console.log(tipos);

    	data.results = tipos;
  		return new TipoResultado(data);
    }));
  }
  */

  public obtenerDetalle(pokemon:Pokemon): Observable<Pokemon> {
    return this.http.get<any>(this.url+pokemon.id,this.httpOptions)
    .pipe(tap(data=>console.log(data)))
    .pipe(map(data=> {
      let pokemon = new Pokemon(data);

      let estadisticas:Array<Estadistica> = data.stats.map(stat =>{
        let estadistica = new Estadistica(stat.stat);
        estadistica.base_stat = stat.base_stat;
        estadistica.effort = stat.effort;
        return estadistica;
      });
      let movimientos:Array<Movimiento> = data.moves.map(move =>{
        let movimiento = new Movimiento(move.move);
        movimiento.id = this.obtenerIdDesdeUrl(movimiento.url);
        return movimiento;
      });
      let habilidades:Array<Habilidad> = data.abilities.map(ability =>{        
        let habilidad = new Habilidad(ability.ability);
        habilidad.id = this.obtenerIdDesdeUrl(habilidad.url);
        return habilidad;
      });
      let tipos:Array<Tipo> = data.types.map(type =>{        
        let tipo = new Habilidad(type.type);
        return tipo;
      });

      pokemon.moves = movimientos;
      pokemon.stats = estadisticas;
      pokemon.abilities = habilidades;
      pokemon.types = tipos;

      return pokemon;
    }));
  }

  public obtenerDeTipo(tipo:Tipo): Observable<Array<Pokemon>> {
    return this.http.get<Array<Pokemon>>(this.url+tipo.id,this.httpOptions)
    .pipe(tap(data=>console.log(data)))
    //.pipe(map(data=> new Pokemon(data)));
  }

  private obtenerIdDesdeUrl(url:string):number {
    let itemsURL = url.split("/");
    return parseInt(itemsURL[itemsURL.length-2]);
  }

}
