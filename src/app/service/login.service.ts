import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Util } from '../Utilities/Util';


// problemas CORS, solucionado con un proxy, mas informacipn en la url
// https://www.youtube.com/watch?v=zq48aSVEwbQ
@Injectable()
export class LoginService{
  public url: string;
  private util: Util;

  getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
      headers.append('Accept', 'application/json');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");

      headers.append('Access-Control-Allow-Credentials', 'true');
      headers.append('Access-Control-Max-Age', '1');
      return headers;
  }

  constructor(
    private _http:Http
  ){
    this.url = GLOBAL.url;
    this.util = new Util();
  }

  loginService(login_params){
    let params = JSON.stringify(login_params);
    let headers = this.getHeaders();
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url+"Login", params, options)
      .map(res => res.json());
  }

  
}

