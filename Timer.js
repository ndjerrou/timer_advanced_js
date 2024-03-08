export default class Timer {
  constructor(
    durationInput,
    playBtn,
    pauseBtn,
    { onStart, onTick, onComplete }
  ) {
    this.durationInput = durationInput;
    this.playBtn = playBtn;
    this.pauseBtn = pauseBtn;
    if (onStart) {
      this.onStart = onStart;
    }
    if (onTick) {
      this.onTick = onTick;
    }
    if (onComplete) {
      this.onComplete = onComplete;
    }
    this.pause = this.pause.bind(this);
    this.tick = this.tick.bind(this);

    playBtn.addEventListener('click', this.start);
    pauseBtn.addEventListener('click', this.pause);
  }

  start = () => {
    this.onStart();
    this.durationInput.value = this.timeRemaining - 1;
    this.intervalId = setInterval(this.tick, 1000);
  };

  pause() {
    clearInterval(this.intervalId);
  }

  tick() {
    const timeRemaining = this.timeRemaining;
    if (timeRemaining > 0) {
      this.timeRemaining = timeRemaining - 1;
      this.onTick();
    } else {
      this.pause();
      this.onComplete();
    }
  }

  get timeRemaining() {
    return parseInt(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}
