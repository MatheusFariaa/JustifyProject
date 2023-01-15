import { JustifyConfiguration } from './../../environments/environments.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JustifyService {

  constructor() { }

  obterUrlLogin() {
    const authEndpoint = `${JustifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${JustifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_url=${JustifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${JustifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  obterTokenUrlCallback() {
    console.log(window.location.hash)
    if(window.location.hash)
    return

      const params = window.location.hash.substring(1).split('&');
      return params[0].split('=')[1];

  }
}
