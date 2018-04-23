import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';


// problemas CORS, solucionado con un proxy, mas informacipn en la url
// https://www.youtube.com/watch?v=zq48aSVEwbQ
@Injectable()
export class AutoService{
	public url: string;

	constructor(
		private _http:Http
	){
		this.url = GLOBAL.url;
	}

	//createAuto(auto_to_register){
	createAuto(){
		console.log("Se lanza el servicio " + this.url);
		//let params = JSON.stringify(auto_to_register);
		let headers = new Headers();
		headers.append('Content-Type','application/json');
	    headers.append('Accept', 'application/json');
	    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
	    headers.append('Access-Control-Allow-Origin', '*');
	    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");

	    headers.append('Access-Control-Allow-Credentials', 'true');
	    headers.append('Access-Control-Max-Age', '1');

	    let options = new RequestOptions({ headers: headers });
	    console.log(options)
	    console.log("va a hacer la petición RestFul");
		//return this._http.post(this.url, {headers: headers})
		//	.map(res => res.json());

		return this._http.get(this.url, options)
			.map(res => res.json());
	}
}

