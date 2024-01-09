import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
       
    },
    {
        path: 'home/write',
        loadComponent: () => import('./pages/home/write/write.component').then(m => m.WriteComponent)
    },
    {
        path: 'list',
        loadComponent: () => import('./pages/list/list.component').then(m => m.ListComponent)
    },
    {
        path: 'detail',
        loadComponent: () => import('./pages/detail/detail.component').then(m => m.DetailComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
