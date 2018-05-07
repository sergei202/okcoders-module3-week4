import { BrowserModule }	from '@angular/platform-browser';
import { NgModule }			from '@angular/core';
import { HttpClientModule }	from '@angular/common/http';
import { FormsModule }		from '@angular/forms';

import { AppRoutingModule }	from './app-routing.module';
import { ApiService }		from './api.service';

import { AppComponent }		from './app.component';
import { HomeComponent }	from './home/home.component';
import { ExamplesComponent } from './examples/examples.component';
import { ListComponent } from './list/list.component';
import { VotesComponent } from './votes/votes.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ExamplesComponent,
		ListComponent,
		VotesComponent,
		MenuComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [ApiService],
	bootstrap: [AppComponent]
})
export class AppModule { }
