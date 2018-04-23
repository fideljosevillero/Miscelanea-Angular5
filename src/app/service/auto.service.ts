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
export class AutoService{
	public url: string;
	private util: Util;

	constructor(
		private _http:Http
	){
		this.url = GLOBAL.url;
		this.util = new Util();
	}

	//createAuto(auto_to_register){
	createAuto(){
		console.log("Se lanza el servicio " + this.url);
		//let params = JSON.stringify(auto_to_register);
		let headers = this.getHeaders();
		/*let headers = new Headers();
		headers.append('Content-Type','application/json');
	    headers.append('Accept', 'application/json');
	    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
	    headers.append('Access-Control-Allow-Origin', '*');
	    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");

	    headers.append('Access-Control-Allow-Credentials', 'true');
	    headers.append('Access-Control-Max-Age', '1');*/

		console.log("va a cargar el header");
		console.log(headers);
	    let options = new RequestOptions({ headers: headers });
	    console.log(options)
	    console.log("va a hacer la petición RestFul");

		return this._http.post(this.url+"/Agencias", options)
			.map(res => res.json());
	}

	prueba2(){
		let headers = this.getHeaders();
	    let options = new RequestOptions({ headers: headers });
		return this._http.post(this.url+"/Ciudades", options)
			.map(res => res.json());
	}

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
}

