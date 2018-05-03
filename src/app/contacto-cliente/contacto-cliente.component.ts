import { Component, OnInit } from '@angular/core';
import { MESSAGES } from '../Utilities/MESSAGES';

@Component({
  selector: 'app-contacto-cliente',
  templateUrl: './contacto-cliente.component.html',
  styleUrls: ['./contacto-cliente.component.css']
})
export class ContactoClienteComponent implements OnInit {

  requeridoMessage: string;
  email_contacto: string;

  constructor() {
    this.requeridoMessage = MESSAGES.requerido;
  }

  ngOnInit() {
  }

  guardarEmailContacto(){
  	localStorage.setItem('email', this.email_contacto);
  }

}
