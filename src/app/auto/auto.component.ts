import { Component, OnInit } from '@angular/core';
import { Auto } from '../Models/Auto';
import { AutoService } from '../service/auto.service';
import { GLOBAL } from '../service/global';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css'],
  providers: [ AutoService ]
})
export class AutoComponent implements OnInit {

  private auto: Auto;

  constructor(
  	private _autoService: AutoService
  ) { 
  	this.auto = new Auto("", "", "");
  }

  ngOnInit() {
  	
  }

  submitAuto(){
  	console.log("Se lanza el metodo submitAuto ");
  	//this._autoService.createAuto(this.auto).subscribe(
  	this._autoService.createAuto().subscribe(
  		response => {
  			//if(response.auto && response.auto.marca){
  				//this.auto = response.auto;
  				console.log("respuesta:");
  				console.log(response);
  			//}
  		},
  		error => {
  			console.log("ERROR LANZADO!");
  			console.log(<any>error);
  		}
  	);
  	console.log("Finaliza el metodo submitAuto ");
  	console.log(this.auto);
  }

  metodoDos(){
    /*this._autoService.fffffffffffffff().subscribe(
      response => {
        //if(response.auto && response.auto.marca){
          //this.auto = response.auto;
          console.log("respuesta:");
          console.log(response);
        //}
      },
      error => {
        console.log("ERROR LANZADO!");
        console.log(<any>error);
      }
    );*/
  }

}
