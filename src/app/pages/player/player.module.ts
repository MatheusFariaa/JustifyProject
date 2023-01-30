import { BotaoMenuComponent } from './../../components/botao-menu/botao-menu.component';
import { PainelEsquerdoComponent } from './../../components/painel-esquerdo/painel-esquerdo.component';
import { PlayerRotas } from './player.routes';
import { RouterModule } from '@angular/router';
import { PlayerComponent } from './player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
    BotaoMenuComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRotas),
  ]
})
export class PlayerModule { }
