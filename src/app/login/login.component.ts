import { Component, OnInit } from '@angular/core';
import { Login } from '../Models/login';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  private buttonNane: string;
  private login: Login;
  private mensaje: string;
  private Contrasena:string;

  constructor(
  	private _LoginService: LoginService
  	) { 
  	this.buttonNane = "Enviar";
  	this.login = new Login("", "");
  }

  ngOnInit() {
  }

  sendCredencials(){
  	this.login.Contraseña = this.Contrasena;
  	this._LoginService.loginService(this.login).subscribe(
      response => {
        console.log("respuesta:");
        console.log(response);
        this.mensaje = response.Consulta_CredencialesResult.respuesta;
      },
      error => {
        console.log("ERROR LANZADO!");
        console.log(<any>error);
      }
    );
  }

}
