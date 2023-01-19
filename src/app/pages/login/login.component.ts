import { JustifyService } from './../../services/justify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private justifyService: JustifyService) {}

  ngOnInit(): void {
    this.verificarTokenUrlCallback();
  }

  verificarTokenUrlCallback() {
    const token = this.justifyService.obterTokenUrlCallback();
    if(!!token) {
      this.justifyService.definirAcessToken(token);
    }
  }

    abirPaginaLogin() {
      window.location.href = this.justifyService.obterUrlLogin();
    }
  }

