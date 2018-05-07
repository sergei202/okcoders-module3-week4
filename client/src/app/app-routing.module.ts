import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }		from './home/home.component';
import { ExamplesComponent }	from './examples/examples.component';
import { ListComponent }		from './list/list.component';
import { VotesComponent }		from './votes/votes.component';

const routes:Routes = [
	{path:'home',		component:HomeComponent},
	{path:'examples',	component:ExamplesComponent},
	{path:'list',		component:ListComponent},
	{path:'votes',		component:VotesComponent},
	{path:'',	redirectTo:'/home',	pathMatch:'full'},		// Redirect / to /home
	{path: '**',	component:HomeComponent}				// Redirect not found paths to /home
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
