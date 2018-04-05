import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { Page404Component } from './page404/page404.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { AutoComponent } from './auto/auto.component';
import { ContactoClienteComponent } from './contacto-cliente/contacto-cliente.component';
import { HomeComponent } from './home/home.component';

const rutas: Routes = [
	// Ojo al componente principal(en este caso Home) se le debe colocar '<router-outlet></router-outlet>'
	// para que redireccione corractamente a la pagina hija.
	{path: "principal", component: HomeComponent, 
		children: [
			{path: "padre", component: PadreComponent},
			{path: "hijo", component: HijoComponent},
			{path: "almacen", component : AlmacenComponent},
			{path: "auto", component : AutoComponent},
			{path: "contacto", component : ContactoClienteComponent}
		]
	}

	/*{path: "inicio", component: HomeComponent},
	{path: "padre", component: PadreComponent},
	{path: "hijo", component: HijoComponent},
	{path: "", redirectTo: "inicio", pathMatch: "full"},
	{path: "almacen", component : AlmacenComponent},
	{path: "auto", component : AutoComponent},
	{path: "contacto", component : ContactoClienteComponent},
	{path: "**", component: Page404Component}*/
];

export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);