let targetedAudio;
let targetedKey;

const removeClass = (e) => {
  e.target.classList.remove("playing");
};

document.addEventListener("keypress", (event) => {
  targetedKey = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  targetedAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (targetedAudio) {
    targetedKey.classList.add("playing");
    targetedKey.addEventListener("transitionend", removeClass);
    targetedAudio.currentTime = 0;
    targetedAudio.play();
  }
});
