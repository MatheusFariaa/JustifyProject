  export const environment = {
    production: true
  };

  export const SpotifyConfiguration = {
    clientId: 'abcc7b46d0d8458b9bf366de2c1919a2',
    clientSecret: '0811a0093aa74d33a6a94afef5ab2b82',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    redirectURL: 'http://localhost:4200/login/',
    scopes: [
      "user-read-currently-playing", // musica tocando agora.
      "user-read-recently-played", // ler musicas tocadas recentemente
      "user-read-playback-state", // ler estado do player do usuario
      "user-top-read", // top artistas e musicas do usuario
      "user-modify-playback-state", // alterar do player do usuario.
      "user-library-read", // ler biblioteca dos usuarios
      "playlist-read-private", // ler playlists privads
      "playlist-read-collaborative" // ler playlists colaborativas
    ]
  }
