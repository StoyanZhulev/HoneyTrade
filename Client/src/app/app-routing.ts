import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { HomeComponent } from './components/shared/home/home.component';


import { ErrorComponent } from './components/error/error.component';

import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, pathMatch: 'full'},

  { path: 'auth', loadChildren: './components/auth/auth.module#AuthenticationModule' },

  { path: 'admin', canActivate: [AdminGuard], loadChildren: './components/admin/admin.module#AdminModule' },

  { path: 'error', component: ErrorComponent },

  { path: '**', component: NotFoundComponent }
];
