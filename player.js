//data
let playlist1 = {
   title: "Hip-Hop Hits",
   coverImageUrl: "./assets/images/playlist1.svg",
   info: {
      totalTracksCount: 4,
      totalTracksDurationInSeconds: 733
   },
   tracks: [
      {
         coverImageUrl: "./assets/images/Eminem.svg",
         artistName: 'Eminem',
         title: 'Rap God',
         fileUrl: './assets/sounds/Eminem_-_Rap_God.mp3',
         isHot: false
      },
      {
         coverImageUrl: "./assets/images/50cents.svg",
         artistName: '50 cent',
         title: 'In da Club',
         fileUrl: './assets/sounds/50 Cent - In Da Club (192kbps).mp3',
         isHot: true
      },
      {
         coverImageUrl: "./assets/images/DMX.png",
         artistName: 'DMX',
         title: "X Gon' Give It To Ya",
         fileUrl: './assets/sounds/DMX-X_Gon_Give_It_To_Ya.mp3',
         isHot: false
      },
      {
         coverImageUrl: "./assets/images/Eminem-feat-50-Cent.png",
         artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
         title: "You Don't Know",
         fileUrl: './assets/sounds/eminem-50cent-you-dont-know.mp3',
         isHot: false
      },
   ]
}

let playlist2 = {
   title: "Rap Hits 1990s",
   coverImageUrl: "./assets/images/playlist2.png",
   info: {
      totalTracksCount: 4,
      totalTracksDurationInSeconds: 733
   },
   tracks: [
      {
         coverImageUrl: "./assets/images/Public-Enemy.png",
         artistName: 'Public Enemy',
         title: 'Fight the Power',
         fileUrl: './assets/sounds/Public_Enemy-Fight _he_Power.mp3',
         isHot: false
      },
      {
         coverImageUrl: "./assets/images/Vanila-Ice.png",
         artistName: 'Vanila Ice',
         title: 'Ice Ice Baby',
         fileUrl: './assets/sounds/Vanilla_ice-Ice_Ice_Baby.mp3',
         isHot: true
      },
      {
         coverImageUrl: "./assets/images/MC-Hammer.png",
         artistName: 'MC Hammer',
         title: 'You Can’t Touch This',
         fileUrl: "./assets/sounds/Mc_Hammer-U_Can't_Touch_This.mp3",
         isHot: false
      },
      {
         coverImageUrl: "./assets/images/Brand-Nubian.png",
         artistName: 'Brand Nubian',
         title: 'Brand Nubian',
         fileUrl: './assets/sounds/Brand_Nubian-Brand_Nubian.mp3',
         isHot: false
      },
   ]
}



//render
renderPlaylist(playlist1);
renderPlaylist(playlist2);

//render player
function renderPlaylist(playlistForRendering) {
   renderPlaylistHeader(playlistForRendering);
   for (let i = 0; i < playlistForRendering.tracks.length; i++) {
      renderTrack(playlistForRendering.tracks[i], playlistForRendering)
   }
}

//render player header
function renderPlaylistHeader(playlistForRendering) {
   // здесь логика отрисовки шапки "входного" плейлиста
   let div = document.createElement('div');
   div.className = "headerOfPlaylist";

   let playlistTitleElement = document.createElement('h2');
   playlistTitleElement.append(playlistForRendering.title);
   playlistTitleElement.className = "playlistTitleElement"

   let playlistImageElement = document.createElement('img');
   playlistImageElement.src = playlistForRendering.coverImageUrl;

   div.append(playlistImageElement, playlistTitleElement)
   if (playlistForRendering === playlist1)   document.getElementById("playlist1").append(div)
   else document.getElementById("playlist2").append(div)
}

//render player tracks
function renderTrack(inputTrackForRendering, playlist) {
   // здесь логика отрисовки "входного" трека
   let trackElement = document.createElement('div');
   trackElement.className = "trackElement";

   let coverElement = document.createElement('img');
   coverElement.src = inputTrackForRendering.coverImageUrl;
   trackElement.append(coverElement);

   let artistAndPlayer = document.createElement('div')
   artistAndPlayer.className = "artistAndPlayer"

   let artistNameAndTitle = document.createElement('div')
   artistNameAndTitle.className = "artistNameAndTitle"

   let spanArtistName = document.createElement('span');
   spanArtistName.innerHTML = inputTrackForRendering.artistName + ' - ';
   spanArtistName.className = "artistName";

   let spanTitle = document.createElement('span');
   spanTitle.innerHTML = inputTrackForRendering.title;
   spanTitle.className = "title";

   artistNameAndTitle.append(spanArtistName, spanTitle);

   let playerElement = document.createElement('audio');
   playerElement.className = 'audio'
   playerElement.src = inputTrackForRendering.fileUrl;
   playerElement.controls = true;

   artistAndPlayer.append(artistNameAndTitle, playerElement);
   trackElement.append(artistAndPlayer);

   if (playlist === playlist1) document.getElementById("playlist1").append(trackElement)
   else document.getElementById("playlist2").append(trackElement)
}
