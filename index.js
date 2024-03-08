import Timer from './Timer';

const durationInput = document.querySelector('#duration');
const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');

const timer = new Timer(durationInput, playBtn, pauseBtn, {
  onStart() {
    console.log('timer started');
  },
  onTick() {
    console.log('ticked !');
  },
  onComplete() {
    console.log('completed');
  },
});
