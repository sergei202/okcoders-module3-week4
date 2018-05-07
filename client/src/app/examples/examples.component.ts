import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {
	uptime;
	serverTime;
	count = 0;
	textInput = '';
	echoResult:any;

	num1 = 0;
	num2 = 0;
	answer = 0;

	constructor(private http:HttpClient) {		// Inject HttpClient as http
		this.getUptime();
		this.getServerTime();
		this.getCount();
	}

	addNumbers() {
		var payload = {
			num1: this.num1,
			num2: this.num2
		};
		this.http.post('/api/add', payload).toPromise().then((result:any) => {
			console.log('/api/add result=%o', result);
			this.answer = result;
		});
	}



	getUptime() {
		return this.http.get('/api/example/uptime')			// Create a GET HTTP request
			.toPromise()									// It returns an Observable, we convert it to a Promise
			.then((result:any) => {							// Our handler when the promise is ready (when it resolves)
				this.uptime = result.uptime;
			});
	}

	getServerTime() {
		// Same as the example above but condensed to one line
		return this.http.get('/api/example/time').toPromise().then((result:any) => {
			this.serverTime = result.text;
		});
	}

	getCount() {
		return this.http.get('/api/example/count').toPromise().then((result:any) => {
			this.count = result.count;
		});
	}

	echoText() {
		return this.http.post('/api/example/echo', {text:this.textInput}).toPromise().then((result:any) => {
			this.echoResult = result;
		});
	}

}
