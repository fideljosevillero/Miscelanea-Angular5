import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Models
import { Cliente } from '../Models/Cliente.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input('change_name') parametroRecibido: String;
  @Input() parametroRecibido_2: String;

  // Output
  @Output() pasarDatosAlPadre = new EventEmitter();
  cliente: Cliente;

  constructor() { 
  	this.cliente = new Cliente("fidel", "miemail@mail.com", "3000867765556");
  }

  ngOnInit() {
  }

  enviarDator(){
  	this.pasarDatosAlPadre.emit({
  		'nombres': this.cliente.nombres,
  		'email': this.cliente.email,
  		'telefono': this.cliente.telefono
	});
  }

}
