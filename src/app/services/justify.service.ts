import { IPlaylist } from './../interfaces/IPlaylist';
import { IUsuario } from './../interfaces/IUsuario';
import { JustifyConfiguration } from './../../environments/environments.prod';
import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js'
import { Token } from '@angular/compiler';
import { JustifyPlaylistParaPlaylist, JustifyUserParaUsuario } from '../Common/justifyHelper';

@Injectable({
  providedIn: 'root'
})
export class JustifyService {

  JustifyApi: Spotify.SpotifyWebApiJs = null;
  usuario: IUsuario;

  constructor() {
    this.JustifyApi = new Spotify();
   }

   async inicializarUsuario() {
    if(!!this.usuario)
      return true;

    const token = localStorage.getItem('token');

    if(!token)
      return false;

      try {

        console.log('sucess')
        this.definirAcessToken(token);
        await this.obterJustifyUsuario();
        return !!this.usuario;


      }catch(ex){

        return false;
      }
    }

    async obterJustifyUsuario() {
      const userInfo = await this.JustifyApi.getMe();
      this.usuario = JustifyUserParaUsuario(userInfo);
      console.log(userInfo)
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

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }


  definirAcessToken(token: string) {
    this.JustifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
    console.log(token);
  }

  async buscarPlaylistUsuario(offset = 0, limit = 50): Promise<IPlaylist[]>{
    const playlists = await this.JustifyApi.getUserPlaylists(this.usuario.id, { offset, limit });
    return playlists.items.map(JustifyPlaylistParaPlaylist);
  }
}
