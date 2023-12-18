import { renderPlaylistHeader } from "./playlistHeader/renderHeader.component.js";
import { renderPlaylistTracks } from "./tracks/renderTracks.component.js";

//render single playlist
export function renderPlaylist(playlistForRendering, allPlaylistsBlock) {

   let singlePlaylistBlock = document.createElement('div');
   singlePlaylistBlock.className = "single-playlist-block";

   renderPlaylistHeader(playlistForRendering, singlePlaylistBlock)
   renderPlaylistTracks(playlistForRendering.tracks, singlePlaylistBlock)

   allPlaylistsBlock.append(singlePlaylistBlock)
}



