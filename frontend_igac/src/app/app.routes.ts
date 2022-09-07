import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    
    { path: 'login', component: LoginComponent},
    { path: 'usuarios', component: UsersComponent},

];

export const AppRoutes: ModuleWithProviders<any> = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true });

