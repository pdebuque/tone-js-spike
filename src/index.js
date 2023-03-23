
// create a synth and connect it to speakers
const synth = new Tone.Synth().toDestination();
// tone.now allows time manipulation
const now = Tone.now();

const c = document.getElementById('c')
const e = document.getElementById('e')
const g = document.getElementById('g')
const nowBtn = document.getElementById('now')
const delayBtn = document.getElementById('delay')
const arpeggio = document.getElementById('arpeggio')

// plays each of these notes for an eighth note
c.addEventListener('click', () => play('c'))
e.addEventListener('click', () => play('e'))
g.addEventListener('click', () => play('g'))

function play(note) {
  const toPlay = note.toUpperCase() + 4;
  synth.triggerAttackRelease(toPlay, '8n')
}

// holds the note as long as the button is clicked
nowBtn.addEventListener('mousedown', () => synth.triggerAttack('C4', now))
nowBtn.addEventListener('mouseup', () => synth.triggerRelease(now))

delayBtn.addEventListener('click', () => {
  console.log('delayed note')
  synth.triggerAttack("D4", now + 1);
  synth.triggerRelease(now + 1.5);
})

const hertzInput = document.getElementById('hertz');
const playHertzBtn = document.getElementById('play-hertz');

playHertzBtn.addEventListener('mousedown', () => {
  console.log('clicked', hertzInput.value)
  if (!hertzInput.value) synth.triggerAttack('c3', now)
  else synth.triggerAttack(hertzInput.value, now)
})
playHertzBtn.addEventListener('mouseup', () => synth.triggerRelease(now))

arpeggio.addEventListener('click', playArpeggio)

async function playArpeggio() {
  await Tone.start()
  synth.triggerAttackRelease('d4', '16n', now);
  synth.triggerAttackRelease('f#4', '16n', now+.3);
  synth.triggerAttackRelease('a4', '16n', now+.6);
  synth.triggerAttackRelease('c#5', '16n', now+.9);
}