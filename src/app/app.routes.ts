import {Routes} from '@angular/router';
import {AppLayoutComponent} from './features/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(c => c.DashboardComponent)
      },
    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./features/auth/auth.component').then(c => c.AuthComponent)
  }
];
