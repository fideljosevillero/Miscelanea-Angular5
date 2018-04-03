import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { Page404Component } from './page404/page404.component';

const rutas: Routes = [
	{path: "padre", component: PadreComponent},
	{path: "hijo", component: HijoComponent},
	{path: "", redirectTo: "padre", pathMatch: "full"},
	{path: "**", component: Page404Component}
];

export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);