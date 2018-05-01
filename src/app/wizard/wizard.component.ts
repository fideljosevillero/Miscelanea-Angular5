import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

	private activeDetails:string;
	private activeCaptain:string;
	private activeDescripction:string;

  constructor() {
  	//this.activeDetails = "active";
  }

  ngOnInit() {
  }

  showDetalles(){
  	this.activeDetails = "active";
  	this.activeCaptain = "inactive";
  	this.activeDescripction = "inactive";	
  }

  showCaptain(){
  	this.activeDetails = "inactive";
  	this.activeCaptain = "active";
  	this.activeDescripction = "inactive";	
  }

  showDescripction(){
  	this.activeDetails = "inactive";
  	this.activeCaptain = "inactive";
  	this.activeDescripction = "active";	
  }

}
