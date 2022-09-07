import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from '../core/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginData = { id: '', password: '' };

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,
    private messageService: MessageService,
  ) {
    this.loginData = { id: '', password: '' };
    
  }

  ngOnInit(): void {
  }
  
  login() {
    if (this.loginData.id === undefined || this.loginData.id === null || this.loginData.id === '') {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "La identificacion es obligatoria",
      });
    } else if (this.loginData.password === undefined || this.loginData.password === null || this.loginData.password === '') {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "La contraseña es obligatoria",
      });
    } else {
      console.log(this.loginData);
      this.authenticationService.login("login",  this.loginData.id, this.loginData.password).subscribe(
        (res: any) => {
          console.log(res);
          if(res ==  true){
            this.messageService.add({
              severity: "success",
              summary: "Bienvenido",
              detail: "Se inicio la sesion correctamente",
            });
            this.router.navigate(['usuarios']);
          }else{
            this.messageService.add({
              severity: "error",
              summary: "Error",
              detail: "Credenciales incorrectas",
            });
          }
        }
      );
      
      
      
    }
  }

  

  enter(event: { key: string; }) {
    if (event.key === 'Enter') {
      this.login();
    }
  }
}
