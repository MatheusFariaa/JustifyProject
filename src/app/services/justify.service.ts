import { JustifyConfiguration } from './../../environments/environments.prod';
import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js'

@Injectable({
  providedIn: 'root'
})
export class JustifyService {

  JustifyApi: Spotify.SpotifyWebApiJs = null;

  constructor() {
    this.JustifyApi = new Spotify();
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
