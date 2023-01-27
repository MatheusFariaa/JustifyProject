import { PainelEsquerdoComponent } from './../../components/painel-esquerdo/painel-esquerdo.component';
import { PlayerRotas } from './player.routes';
import { Router, RouterModule } from '@angular/router';
import { PlayerComponent } from './player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRotas),
  ]
})
export class PlayerModule { }
