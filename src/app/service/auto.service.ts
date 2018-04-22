import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class AutoService{
	public url: string;

	constructor(
		private _http:Http
	){}

	createAuto(auto_to_register){
		let params = JSON.stringify(auto_to_register);
		let headers = new Headers({'Content-type': 'application/json'});

		return this._http.post(this.url + "nombre_metodo", params, {headers: headers})
			.map(res => res.json());
	}
}

