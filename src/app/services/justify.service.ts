import { IUsuario } from './../interfaces/IUsuario';
import { JustifyConfiguration } from './../../environments/environments.prod';
import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js'
import { Token } from '@angular/compiler';
import { JustifyUserParaUsuario } from '../Common/justifyHelper';

@Injectable({
  providedIn: 'root'
})
export class JustifyService {

  JustifyApi: Spotify.SpotifyWebApiJs = null;

  usuario: IUsuario;

  userInfo: string;

  constructor() {
    this.JustifyApi = new Spotify();
   }

   async inicializarUsuario() {
    if(!this.usuario)
      return true;

    const token = localStorage.getItem('token');

    if(!token)
      return false;

      try {

        await this.definirAcessToken(token);
        await this.obterJustifyUsuario();
        return !!this.usuario;


      }catch(ex){

        return false;

      }
    }

    async obterJustifyUsuario() {
      const userInfo = this.JustifyApi.getMe();
      this.usuario = JustifyUserParaUsuario(await userInfo);
    }

   obterUrlLogin() {
    const authEndpoint = `${JustifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${JustifyConfiguration.clientId}&`;
    const redirectURL = `redirect_uri=${JustifyConfiguration.redirectURL}&`;
    const scopes = `scope=${JustifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectURL + scopes + responseType;
  }

  obterTokenUrlCallback() {
    if (!window.location.hash)
    return '';

    const clienteSecret = `client_secret=${JustifyConfiguration.clienteSecret}&`;
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }


  definirAcessToken(token: string) {
    this.JustifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
    this.JustifyApi.skipToNext();
  }
}
