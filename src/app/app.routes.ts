import { Routes } from '@angular/router';
import { Dashboard } from './Modules/dashboard/dashboard';
import { Aboutwork } from './Modules/aboutwork/aboutwork';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'dashboard', component: Dashboard },
    { path: 'about', component: Aboutwork }
];
