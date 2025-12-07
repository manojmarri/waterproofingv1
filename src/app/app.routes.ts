import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('../app/Modules/dashboard/dashboard').then(m => m.Dashboard) },
    { path: 'dashboard', loadComponent: () => import('../app/Modules/dashboard/dashboard').then(m => m.Dashboard) },
    { path: 'about', loadComponent: () => import('../app/Modules/aboutwork/aboutwork').then(m => m.Aboutwork) },
    { path: 'services', loadComponent: () => import('../app/Modules/services/services').then(m => m.Services) },
    { path: 'contact', loadComponent: () => import('../app/Modules/contact/contact').then(m => m.Contact) }
];
