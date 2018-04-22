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
  	console.log("---------------");
  }

  submitAuto(){
  	this._autoService.createAuto(this.auto).subscribe(
  		response => {
  			if(response.auto && response.auto.marca){
  				this.auto = response.auto;
  			}
  		},
  		error => {
  			console.log(<any>error)
  		}
  	);
  	console.log(this.auto);
  }

}
