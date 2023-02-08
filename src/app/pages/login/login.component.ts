import { Router } from '@angular/router';
import { JustifyService } from './../../services/justify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private justifyService: JustifyService,
    private router: Router) {
    }

  ngOnInit(): void {
    this.verificarTokenUrlCallback();
  }

  verificarTokenUrlCallback() {
    const token = this.justifyService.obterTokenUrlCallback();
    if(!!token) {
      this.justifyService.definirAcessToken(token);
      this.router.navigate(['/player/home']);
    }
  }

    abirPaginaLogin() {
      window.location.href = this.justifyService.obterUrlLogin();
    }
  }

