import { JustifyService } from './../../services/justify.service';
import { IUsuario } from './../../interfaces/IUsuario';
import { Component } from '@angular/core';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rodape-usuario',
  templateUrl: './rodape-usuario.component.html',
  styleUrls: ['./rodape-usuario.component.scss']
})
export class RodapeUsuarioComponent {

  sairIcone = faSignOut;
  usuario: IUsuario = null;

  constructor(
    private JustifyService: JustifyService
  ) { }

  ngOnInit(): void {
    this.usuario = this.JustifyService.usuario;
  }

  logout() {
    this.JustifyService.logout();
  }
}
