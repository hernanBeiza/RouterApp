import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  faBars = faBars;

  public routerSubscription: Subscription;
  public activatedSubscription: Subscription;
  public seleccionada:string = "";

  constructor(private router:Router) { }

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd) {
        this.obtenerSeccion();
      }
    });
  }

  private obtenerSeccion():void {
    let urls = this.router.url.split("/");
    let ultima = urls[2];
    this.seleccionada = ultima;
    console.log(this.seleccionada);
  }

  public revisarSeccion(boton:string):boolean {
    if(this.seleccionada == boton.toString().toLowerCase()){
      return true;
    }
    return false;
  }

}