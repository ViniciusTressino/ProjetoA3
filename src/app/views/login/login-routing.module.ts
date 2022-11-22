import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { 
  logar() {

    var emails = (<HTMLInputElement>document.getElementById('emails')).value;
    var senhas = (<HTMLInputElement>document.getElementById('senhas')).value;

    if(emails == "admin" && senhas == "admin") {
      alert('Sucesso');
      location.href = "home.component.html"
    }else{
      alert('Usuario ou senha invalido');

    }
  }
}