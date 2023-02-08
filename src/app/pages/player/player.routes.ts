import { HomeComponent } from './../home/home.component';
import { Component } from '@angular/core';
import { PlayerComponent } from './player.component';
import { Routes } from '@angular/router';

export const PlayerRotas: Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      }
    ]
  }
]
