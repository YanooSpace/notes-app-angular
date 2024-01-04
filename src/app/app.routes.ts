import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'write',
        loadComponent: () => import('./pages/write/write.component').then(m => m.WriteComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
