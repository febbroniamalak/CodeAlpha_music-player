const songs = [
  { title: "Baktob Esmak", file: "songs/baktob_esmak.mp3" },
  { title: "Kifak Inta", file: "songs/kifak_inta.mp3" },
  { title: "Sahar El Layali", file: "songs/sahar_el_layali.mp3" }
];

let currentSongIndex = 0;

const audioPlayer = document.getElementById("audio-player");
const songTitle = document.getElementById("song-title");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

function loadSong() {
  const song = songs[currentSongIndex];
  audioPlayer.src = song.file; 
  songTitle.textContent = song.title;
}

loadSong();
audioPlayer.play();

audioPlayer.addEventListener("ended", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong();
  audioPlayer.play();
});

nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong();
  audioPlayer.play();
});

prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong();
  audioPlayer.play();
});
