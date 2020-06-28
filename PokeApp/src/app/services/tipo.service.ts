import { Injectable } from '@angular/core';

import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaderResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map,tap} from 'rxjs/operators';

import { Pokemon, Tipo, Movimiento } from './../models/';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  private url = environment.API+"type/";
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  public obtener(): Observable<Array<Tipo>> {
    return this.http.get<Array<Tipo>>(this.url,this.httpOptions)
    .pipe(tap(data=>console.log(data)))
  	.pipe(map((data:any)=> {
    	//console.log(data);
      //Faltan muchos seteos que deberían hacerse
    	let tipos:Array<Tipo> = data.results.map(item=> {
        let tipo = new Tipo(item);
        tipo.id = this.obtenerIdDesdeUrl(item.url);
        return tipo;
      });
    	//console.log(tipos);
    	data.results = tipos;
      return tipos;
    }));
  }

  public obtenerDetalle(tipo:Tipo): Observable<Tipo> {
    return this.http.get<Tipo>(this.url+tipo.id,this.httpOptions)
    .pipe(tap(data=>console.log(data)))
    .pipe(map(data=> {
      //Faltan muchos seteos que deberían hacerse
      let movimientos = data.moves.map(move=>{
        let movimiento = new Movimiento(move);
        movimiento.id = this.obtenerIdDesdeUrl(move.url);
        return movimiento;
      });
      let tipo = new Tipo(data);
      tipo.moves = movimientos;
      //let tipos = data.results.map(item=> new Tipo(item));
      //console.log(tipos);
      //data.results = tipos;
      return tipo;
    }));
  }

  public obtenerPokemonesDeTipo(tipo:Tipo): Observable<Array<Pokemon>> {
    return this.http.get<Array<Pokemon>>(this.url+tipo.id,this.httpOptions)
    .pipe(tap(data=>console.log(data)))
    .pipe(map((data:any)=>{
      //Faltan muchos seteos que deberían hacerse
      let pokemons:Array<Pokemon> = data.pokemon.map(item=>{
        let pokemon = new Pokemon(item.pokemon);
        pokemon.id = this.obtenerIdDesdeUrl(pokemon.url);
        return pokemon;
      });
      return pokemons;
    }));
  }

  private obtenerIdDesdeUrl(url:string):number {
    let itemsURL = url.split("/");
    return parseInt(itemsURL[itemsURL.length-2]);
  }

}
