import { Routes } from '@angular/router';
import { Login } from './Components/login/login';
import { Layout } from './Components/layout/layout';
import { UserList } from './Components/user-list/user-list';
import { Dashboard } from './Components/dashboard/dashboard';
import { Register } from './Components/register/register';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
     {
    path: 'register',
    component: Register
  },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'user-list',
                component: UserList
            },

        ]
    }

];
