export function renderPlaylistsHeader () {
   let playlistsHeader = document.createElement('div');
   playlistsHeader.className = "playlists-header";

   let playlistsHeaderLogoImage = document.createElement('img');
   playlistsHeaderLogoImage.className = "playlist-header-logo-image"
   playlistsHeaderLogoImage.src = "../../assets/images/logo.svg";

   let playlistsHeaderLogoTitle = document.createElement('span');
   playlistsHeaderLogoTitle.className = "playlist-header-logo-title";
   playlistsHeaderLogoTitle.innerText = "InPlaylist"

   playlistsHeader.append(playlistsHeaderLogoImage, playlistsHeaderLogoTitle)
   
   document.body.append(playlistsHeader)
}