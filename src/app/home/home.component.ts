import { Component, OnInit } from '@angular/core';
//let $ = require('assets/js/jquery.min.js');
declare var require: any
let $ = require('assets/js/jquery.min.js');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('#buttonJQuery').click(function(){
  		console.log("Imprimiendo en consola desde jQuery");
  		$('#p_from_JQuery').text("texto desde JQuery");
  	});
  }

}
