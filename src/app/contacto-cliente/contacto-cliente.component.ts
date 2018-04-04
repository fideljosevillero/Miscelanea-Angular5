import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto-cliente',
  templateUrl: './contacto-cliente.component.html',
  styleUrls: ['./contacto-cliente.component.css']
})
export class ContactoClienteComponent implements OnInit {

  email_contacto: string;

  constructor() { }

  ngOnInit() {
  }

  guardarEmailContacto(){
  	localStorage.setItem('email', this.email_contacto);
  }

}
