import { Routes } from '@angular/router';

// Import your newly created components
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Perfil } from './pages/perfil/perfil';
import { Recuperar } from './pages/recuperar/recuperar';
import { Tienda } from './pages/tienda/tienda';

export const routes: Routes = [
    // This route redirects the base URL to the '/home' path
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    
    { path: 'tienda', component: Tienda },
    // Route for the home page
    { path: 'home', component: Home },
    
    // Route for the login page
    { path: 'login', component: Login },
    
    // Route for the register page
    { path: 'register', component: Register },
    
    // Route for the user profile page
    { path: 'perfil', component: Perfil },

    // Route for the password recovery page
    { path: 'recuperar', component: Recuperar }
];