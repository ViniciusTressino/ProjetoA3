import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
},
{ path: 'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule) },

{ path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },

{ path: 'cadastro', loadChildren: () => import('./views/cadastro/cadastro.module').then(m => m.CadastroModule) },

{ path: 'agenda', loadChildren: () => import('./views/agenda/agenda.module').then(m => m.AgendaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
