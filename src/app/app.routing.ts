import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '', component: HomeComponent }
];

export const appRoutingProviders: any[] = [

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);