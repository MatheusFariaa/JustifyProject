import { IUsuario } from './../interfaces/IUsuario';

export function JustifyUserParaUsuario(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
  return {
    id: user.id,
    nome: user.display_name,
    imagemUrl: user.images.pop().url
  }
}
