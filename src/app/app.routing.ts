import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';

const rutas: Routes = [
	{path: "padre", component: PadreComponent},
	{path: "hijo", component: HijoComponent},
	{path: "", redirectTo: "padre", pathMatch: "full"}	
];

export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);