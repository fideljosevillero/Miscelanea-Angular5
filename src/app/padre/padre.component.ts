import { Component, OnInit } from '@angular/core';

// models


@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

	parametro1: String;
	textoInput: String;
	clienteRecibido; // sin tipo de datos

  constructor(){
  	this.parametro1 = "parametro enviado desde padre!!!"; 
   }

  ngOnInit() {
  }

  verDatosDesdeHijo(event){
  	this.clienteRecibido = event;
  	console.log(event);
  }

}
