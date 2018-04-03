import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input('change_name') parametroRecibido: String;
  @Input() parametroRecibido_2: String;

  constructor() { 

  }

  ngOnInit() {
  }

}
