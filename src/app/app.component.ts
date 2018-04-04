import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'Training Angular 4-5';
  contactoEmail: String;

  ngDoCheck(){
  	this.contactoEmail = localStorage.getItem('email');
  }
}
