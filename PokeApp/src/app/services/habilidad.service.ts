import { Injectable } from '@angular/core';

import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaderResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map,tap} from 'rxjs/operators';

import { Estadistica, Habilidad, Movimiento, Pokemon, Tipo } from './../models/';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  private url = environment.API+"ability/";
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  public obtenerDetalle(habilidad:Habilidad): Observable<Habilidad> {
    return this.http.get<any>(this.url+habilidad.id,this.httpOptions)
    .pipe(tap(data=>console.log(data)))
    .pipe(map(data=> {
      let habilidad = new Habilidad(data);
      let pokemons:Array<Pokemon> = data.pokemon.map(item=> {
        let pokemon = new Pokemon(item.pokemon);
        pokemon.id = this.obtenerIdDesdeUrl(pokemon.url);
        return pokemon;
      });
      habilidad.pokemon = pokemons;
      return habilidad;
    }));
  }

  private obtenerIdDesdeUrl(url:string):number {
    let itemsURL = url.split("/");
    return parseInt(itemsURL[itemsURL.length-2]);
  }

}