import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

	constructor(private http:HttpClient) { }

	getTime():Promise<any> {
		return this.http.get('/api/time').toPromise();
	}

}
