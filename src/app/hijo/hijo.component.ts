import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

// Models
import { Cliente } from '../Models/Cliente';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input('change_name') parametroRecibido: String;
  @Input() parametroRecibido_2: String;

  // Output
  @Output() pasarDatosAlPadre = new EventEmitter();
  cliente: Cliente;

  constructor() { 
  	this.cliente = new Cliente("fidel", "miemail@mail.com", "3000867765556");
  }

  // Hook 1
  ngOnChanges(changes: SimpleChanges){
    //console.log(changes);
    console.log("lanzando el ngOnChanges");
  }

  // Hook 2 (después del ngOnChanges)
  ngOnInit() {
    console.log("lanzando el ngOnInit");
  }

  // Hook 3 (después del ngOnInit), se ejecuta cada que se ejecuta un evento.
  ngDoCheck(){
    console.log("lanzando el ngDoCheck");
  }

  // Hook 4 (Antes de destruir el componente)
  ngOnDestroy(){
    // limpiar variables o lo que desees hacer antes que el componente sea destruido
    console.log("componente 'hijo' se va a destruir");
  }


  enviarDator(){
  	this.pasarDatosAlPadre.emit({
  		'nombres': this.cliente.nombres,
  		'email': this.cliente.email,
  		'telefono': this.cliente.telefono
	});
  }

}
