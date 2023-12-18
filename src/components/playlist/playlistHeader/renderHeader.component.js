
export function renderPlaylistHeader(playlistForRendering, singlePlaylistBlock) {
   // здесь логика отрисовки шапки "входного" плейлиста
   let playListHeaderBlock = document.createElement('div');
   playListHeaderBlock.className = "playlist-header-block";

   let playlistHeaderTitlesBlock = document.createElement('div');
   playlistHeaderTitlesBlock.className = "playlist-header-titles-block";

   let playlistHeaderImageBlock = document.createElement('div');
   playlistHeaderImageBlock.className = "playlist-header-image-block";

   renderPlaylistHeaderCover(playlistForRendering, playlistHeaderImageBlock);
   renderPlaylistHeaderTitle(playlistForRendering, playlistHeaderTitlesBlock);

   playListHeaderBlock.append(playlistHeaderImageBlock, playlistHeaderTitlesBlock);
   singlePlaylistBlock.append(playListHeaderBlock)
}

function renderPlaylistHeaderTitle(playlistForRendering, playlistHeaderTitlesBlock) {
   let playlistWord = document.createElement('p');
   playlistWord.className = "playlist-word";
   playlistWord.innerHTML = "Playlist";
   playlistHeaderTitlesBlock.append(playlistWord);

   let playlistTitleElement = document.createElement('h2');
   playlistTitleElement.append(playlistForRendering.title);
   playlistTitleElement.className = "title-playlist";
   playlistHeaderTitlesBlock.append(playlistTitleElement)

   let infoAboutTracks = document.createElement('p');
   infoAboutTracks.className = "info-about-tracks";
   infoAboutTracks.append(playlistForRendering.tracks.length + ' tracks, 12m 13s')
   playlistHeaderTitlesBlock.append(infoAboutTracks)

   let infoAboutArtistsNames = document.createElement('div');
   infoAboutArtistsNames.className = 'info-about-artists-names';

   let infoAboutArtistsNamesPartLeft = document.createElement('span');
   infoAboutArtistsNamesPartLeft.className = 'artists-names-part-left';
   infoAboutArtistsNamesPartLeft.append(playlistForRendering.tracks[0].artistName + ', ' 
   + playlistForRendering.tracks[1].artistName + ', ' + playlistForRendering.tracks[2].artistName);

   let infoAboutArtistsNamesPartRight = document.createElement('span');
   infoAboutArtistsNamesPartRight.className = 'artists-names-part-right';
   infoAboutArtistsNamesPartRight.innerText = " and others";

   infoAboutArtistsNames.append(infoAboutArtistsNamesPartLeft, infoAboutArtistsNamesPartRight)

   playlistHeaderTitlesBlock.append(infoAboutArtistsNames)

}

function renderPlaylistHeaderCover(playlistForRendering, playlistHeaderImageBlock) {
   let coverElement = document.createElement('img');
   coverElement.src = playlistForRendering.coverImageUrl;
   playlistHeaderImageBlock.append(coverElement)
}