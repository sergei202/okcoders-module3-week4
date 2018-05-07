import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-votes',
	templateUrl: './votes.component.html',
	styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
	votes1 = 0;
	votes2 = 0;

	constructor(private http:HttpClient) {
		this.getVotes();
	}

	getVotes() {
		return this.http.get('/api/votes').toPromise().then((result:any) => {
			this.votes1 = result.votes1;
			this.votes2 = result.votes2;
		});
	}

	vote1() {
		return this.http.post('/api/vote1', {}).toPromise().then((result:any) => {
			this.votes1 = result.votes1;
			this.votes2 = result.votes2;
		});
	}

	vote2() {
		return this.http.post('/api/vote2', {}).toPromise().then((result:any) => {
			this.votes1 = result.votes1;
			this.votes2 = result.votes2;
		});
	}


	ngOnInit() {
	}

}
