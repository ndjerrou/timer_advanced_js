export default class Timer {
  constructor(durationInput, playBtn, pauseBtn) {
    this.durationInput = durationInput;
    this.playBtn = playBtn;
    this.pauseBtn = pauseBtn;

    this.pause = this.pause.bind(this);

    playBtn.addEventListener('click', this.start);
    pauseBtn.addEventListener('click', this.pause);
  }

  start = () => {
    const timer = this.durationInput.value;
    this.durationInput.value--;
    this.tick();
  };

  pause() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.intervalId = setInterval(
      () => (this.durationInput.value > 0 ? this.durationInput.value-- : null),
      1000
    );
  }
}
