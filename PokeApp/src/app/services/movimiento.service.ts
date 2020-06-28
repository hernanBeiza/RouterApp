import { Injectable } from '@angular/core';

import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaderResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map,tap} from 'rxjs/operators';

import { Estadistica, Habilidad, Movimiento, Pokemon, Tipo } from './../models/';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  private url = environment.API+"move/";
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  public obtenerDetalle(movimiento:Movimiento): Observable<Movimiento> {
    return this.http.get<any>(this.url+movimiento.id,this.httpOptions)
    .pipe(tap(data=>console.log(data)))
    .pipe(map(data=> {
      let movimiento = new Movimiento(data);
      return movimiento;
    }));
  }

  private obtenerIdDesdeUrl(url:string):number {
    let itemsURL = url.split("/");
    return parseInt(itemsURL[itemsURL.length-2]);
  }

}