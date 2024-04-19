import { Routes } from '@angular/router';
import { ViacepComponent } from './components/viacep/viacep.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent, // Rota para o componente de login
  },
  {
    path: 'viacep',
    component: ViacepComponent, // Rota para o componente ViaCEP
  },
  {
    path: '',
    redirectTo: '/login', // Redireciona para o login se nenhum caminho for especificado
    pathMatch: 'full',
  },
];
