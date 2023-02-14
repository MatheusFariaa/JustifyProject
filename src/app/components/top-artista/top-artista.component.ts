import { JustifyService } from './../../services/justify.service';
import { Component } from '@angular/core';
import { IArtista } from 'src/app/interfaces/IArtista';
import { newArtista } from 'src/app/Common/factories';

@Component({
  selector: 'app-top-artista',
  templateUrl: './top-artista.component.html',
  styleUrls: ['./top-artista.component.scss']
})
export class TopArtistaComponent {

  artista: IArtista = newArtista();

  constructor(private justifyService: JustifyService) {}

}
