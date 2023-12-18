export function renderPlaylistTrack(inputTrackForRendering, singlePlaylistBlock) {
   // здесь логика отрисовки "входного" трека
   let trackElement = document.createElement('div');
   trackElement.className = "track-element"

   let coverElement = document.createElement('img');
   coverElement.src = inputTrackForRendering.coverImageUrl;
   trackElement.append(coverElement)

   let trackTitleAndPlayerBlock = document.createElement('div');
   trackTitleAndPlayerBlock.className = 'track-title-and-player-block';

   let trackTitleElement = document.createElement('div');

   let isTrending = document.createElement('img');

   isTrending.src = "./assets/images/fire.png";
   if (inputTrackForRendering.inTrend) trackTitleElement.append(isTrending)
   isTrending.className = "fire"
   let artistName = document.createElement('span');
   artistName.className = "artist-name";
   artistName.append(inputTrackForRendering.artistName + " - ");

   let trackName = document.createElement('span');
   trackName.className = "track-name";
   trackName.append(inputTrackForRendering.title);

   trackTitleElement.append(artistName, trackName)

   trackTitleAndPlayerBlock.append(trackTitleElement)

   let audioElement = document.createElement('audio');
   audioElement.src = inputTrackForRendering.fileUrl;
   audioElement.controls = true;
   trackTitleAndPlayerBlock.append(audioElement);

   trackElement.append(trackTitleAndPlayerBlock);

   singlePlaylistBlock.append(trackElement)
}

//  audio::-webkit-media-controls-enclosure
// audio {
//   height: 24px;
//   margin-top: 10px;
//   filter: invert(1);
// }
// filter: invert(1)