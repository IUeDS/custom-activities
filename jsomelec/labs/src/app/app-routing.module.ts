import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LabPageComponent } from './components/lab-page/lab-page.component';

const routes = [
	{ path: 'lab/:labNum/page/:pageNum', component: LabPageComponent },
    { path: '', component: LabPageComponent } //at the moment, defaults within class to u15p01
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true })
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}