import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

	parametro1: String;
	textoInput: String;

  constructor(){
  	this.parametro1 = "parametro enviado desde padre!!!"; 
   }

  ngOnInit() {
  }

}
