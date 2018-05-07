import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	items:any = [];
	newItem = '';

	constructor(private http:HttpClient) {
		this.getItems();
		setInterval(() => this.getItems(), 1000);
	}

	getItems() {
		return this.http.get('/api/items').toPromise().then(items => {
			this.items = items;
		});
	}

	addItem() {
		console.log('addItem: newItem=%o', this.newItem);
		// this.items.push(this.newItem);

		this.http.post('/api/item', {newItem:this.newItem}).toPromise().then(items => {
			this.items = items;
		});

		this.newItem = '';
	}


	ngOnInit() {
	}

}
