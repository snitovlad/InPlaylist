import { renderPlaylist } from "./playlist/renderPlaylist.component.js";
import { renderPlaylistsHeader } from "./renderPlaylistsHeader.js";

export function renderPlaylists(playlists) { 
   renderPlaylistsHeader();
   let allPlaylistsBlock = document.createElement('div');
   allPlaylistsBlock.className = 'all-playlists-block';
   
   let title = document.createElement('h1');
   title.append("My Playlists");
   document.body.append(title)

      for (let i = 0; i < playlists.length; i++) {
         renderPlaylist(playlists[i], allPlaylistsBlock);

      }   
      document.body.append(allPlaylistsBlock);
   }


