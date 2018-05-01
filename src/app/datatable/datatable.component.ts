import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Models/Cliente';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

	private listPersonas: Array<Cliente> = [];

  constructor() { 
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

}
