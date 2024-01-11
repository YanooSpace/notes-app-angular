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
        /**
         * Path Parameter
         * 라우트 경로 끝에 들어가는 각기 다른 id 값들
         * : 는 Path Parameter 가 올것을 의미한다
         * id 는 해당 Path Parameter의 이름을 의미한다, like 변수명, ex) :scheduleId
         */
        path: 'detail/:scheduleId',
        loadComponent: () => import('./pages/detail/detail.component').then(m => m.DetailComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
