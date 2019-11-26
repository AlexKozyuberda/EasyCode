const video = document.querySelector(".viewer");
const toggle = document.querySelector(".toggle");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const progressTime = document.querySelector(".progress__time");
const fullTime = document.querySelector(".full__time");
const volume = document.querySelector('[name="volume"');
const playBackRate = document.querySelector('[name="playbackRate"');
const rewindBtns = document.querySelectorAll(".player__button");

rewindBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    video.currentTime = video.currentTime + parseFloat(btn.dataset.skip);
  });
});

fullTime.value = secondsToTime(video.currentTime);
progressTime.value = secondsToTime(video.currentTime);

function secondsToTime(time) {
  let sec = parseInt(time, 10);

  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return hours + ":" + minutes + ":" + seconds;
}

function toggleVideo() {
  fullTime.value = secondsToTime(video.duration);
  video.volume = 0.5;
  if (video.paused) {
    video.play();
    toggle.classList.add("play");
  } else {
    video.pause();
    toggle.classList.remove("play");
  }
}

function hadleProgress() {
  progressTime.value = secondsToTime(video.currentTime);
  progressBar.style.flexBasis = video.currentTime / video.duration * 100 + "%";

  if (Math.floor(video.duration) === Math.floor(video.currentTime)) {
    toggle.classList.remove("play");
  }
}

function hadleProgressUpdate() {
  let progressPrecent = event.offsetX * 100 / progress.offsetWidth;
  progressBar.style.flexBasis = progressPrecent + "%";
  video.currentTime = video.duration / 100 * progressPrecent;
}

function hadleVolume() {
  video.volume = volume.value;
}

function hadlePlayBackRate() {
  video.playbackRate = playBackRate.value;
}

toggle.addEventListener("click", toggleVideo);
video.addEventListener("timeupdate", hadleProgress);
progress.addEventListener("click", hadleProgressUpdate);
volume.addEventListener("input", hadleVolume);
playBackRate.addEventListener("input", hadlePlayBackRate);
