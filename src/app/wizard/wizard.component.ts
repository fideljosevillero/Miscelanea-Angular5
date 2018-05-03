import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Models/Cliente';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  private estadoTab1:string;
  private estadoTab2:string;
  private estadoTab3:string;
  private listPersonas:Array<Cliente> = [];

	private activeDetails:string;
	private activeCaptain:string;
	private activeDescripction:string;

  constructor() {
  	this.estadoTab1 = "active";
    //***
    this.listPersonas.push(
      new Cliente("nombre1", "email1", "telefono1"),
      new Cliente("nombre2", "email2", "telefono2"),
      new Cliente("nombre3", "email3", "telefono3"),
      new Cliente("nombre4", "email4", "telefono4"),
      new Cliente("nombre5", "email5", "telefono5"),
      new Cliente("nombre6", "email6", "telefono6"),
      new Cliente("nombre7", "email7", "telefono7"),
    );
  }

  ngOnInit() {
  }

  estado1(){
    this.estadoTab1 = "active";
    this.estadoTab2 = "inactive";
    this.estadoTab3 = "inactive"; 
  }

  estado2(){
  	this.estadoTab1 = "inactive";
  	this.estadoTab2 = "active";
  	this.estadoTab3 = "inactive";	
  }

  estado3(){
  	this.estadoTab1 = "inactive";
    this.estadoTab2 = "inactive";
    this.estadoTab3 = "active";
  }

}
