import { IPlaylist } from '../interfaces/IPlaylist';
import { IUsuario } from './../interfaces/IUsuario';

export function JustifyUserParaUsuario(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
  return {
    id: user.id,
    nome: user.display_name,
    imagemUrl: ''
  }
}

export function JustifyPlaylistParaPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist {
  return {
    id: playlist.id,
    nome: playlist.name,
    imagemUrl: ''
  };
}
