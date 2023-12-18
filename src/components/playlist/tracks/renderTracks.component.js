import { renderPlaylistTrack } from "./track/renderTrack.component.js";

//render tracks of single playlist
 export function renderPlaylistTracks(track, singlePlaylistBlock) {
   for (let i = 0; i < track.length; i++) {
      renderPlaylistTrack(track[i], singlePlaylistBlock)
   }
}


