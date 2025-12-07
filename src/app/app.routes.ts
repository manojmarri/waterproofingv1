import { Routes } from '@angular/router';
import { Dashboard } from './Modules/dashboard/dashboard';
import { Aboutwork } from './Modules/aboutwork/aboutwork';
import { Services } from './Modules/services/services';
import { Contact } from './Modules/contact/contact';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'dashboard', component: Dashboard },
    { path: 'about', component: Aboutwork },
    { path: 'services', component: Services },
    { path: 'contact', component: Contact }
];
