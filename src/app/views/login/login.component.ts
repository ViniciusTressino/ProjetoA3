import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  framework = "Angular";

  
  logar(){

    var emails = (<HTMLInputElement>document.getElementById('emails')).value;
    var senhas = (<HTMLInputElement>document.getElementById('senhas')).value;

console.log(JSON.stringify({
    emails:emails,
    senhas:senhas
}));

    fetch("/login",{
        method:'POST',
        body: JSON.stringify({
          emails:emails,
          senhas:senhas
        }) , 
        headers: { "Content-Type" : "application/json" }
        
    })

    .then(async (resp) => {
        var status = await resp.text();
        console.log(status)
        if(status == 'conectado' ){
            location.href = '/home/home.component.html'
        }else {
            alert('nome e senha invalidos!!')
        }
        
    });

}
 
  constructor() { }

  ngOnInit(): void {
  }

}