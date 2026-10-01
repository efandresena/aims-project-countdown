const TARGET = new Date('2026-10-22T00:00:00');
let started = false;


const motivationalQuotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "What you get by achieving your goals is not as important as what you become.", author: "Zig Ziglar" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Well done is better than well said.", author: "Benjamin Franklin" },
  { text: "The difference between ordinary and extraordinary is that little extra.", author: "Jimmy Johnson" },
  { text: "Don't stop when you're tired. Stop when you're done.", author: "Unknown" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { text: "Do something today that your future self will thank you for.", author: "Unknown" },
  { text: "A year from now you may wish you had started today.", author: "Karen Lamb" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "If you want to achieve greatness stop asking for permission.", author: "Unknown" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "If you're going through hell, keep going.", author: "Winston Churchill" },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
  { text: "Let the young man in his desperation go to hunt. If he kills an elephant, he will feed the village. If he kills nothing, he will at least have walked under the stars.", author: "African Wisdom" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "A river cuts through rock not because of its power, but because of its persistence.", author: "Jim Watkins" },
  { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
  { text: "Research is creating new knowledge.", author: "Neil Armstrong" },
  { text: "Science is a way of thinking much more than it is a body of knowledge.", author: "Carl Sagan" },
  { text: "Discovery consists of seeing what everybody has seen and thinking what nobody has thought.", author: "Albert Szent-Gyorgyi" },
  { text: "If we knew what it was we were doing, it would not be called research, would it?", author: "Albert Einstein" },
  { text: "Research is formalized curiosity. It is poking and prying with a purpose.", author: "Zora Neale Hurston" },
  { text: "To raise new questions, new possibilities, to regard old problems from a new angle, requires creative imagination.", author: "Albert Einstein" },
  { text: "Science knows no country, because knowledge belongs to humanity.", author: "Louis Pasteur" },
  { text: "The scientist is not a person who gives the right answers, but one who asks the right questions.", author: "Claude Levi-Strauss" },
];



const reminders = [
  "You've got this. Keep going! 💪",
  "Every hour counts. Make it count!",
  "One step at a time. You're closer than you think.",
  "Don't give up. The finish line is in sight!",
  "Small progress every day adds up fast.",
  "Stay focused. You've worked too hard to stop now.",
  "Rest when you need to, then go again.",
  "Your hard work will pay off. Trust the process.",
  "Breathe, focus, and keep moving forward.",
  "You're doing better than you realise.",
  "No regrets. Give it everything you've got!",
  "The countdown is on. Make every moment count.",
];



function getTimeRemaining() {
  const now = new Date();
  const diff = TARGET - now;
  if (diff <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    total: diff,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function updateDisplay() {
  const t = getTimeRemaining();
  document.getElementById('days').textContent = pad(t.days);
  document.getElementById('hours').textContent = pad(t.hours);
  document.getElementById('minutes').textContent = pad(t.minutes);
  document.getElementById('seconds').textContent = pad(t.seconds);

  if (t.total === 0) {
    document.querySelector('.timer').innerHTML = '<div class="times-up">🎓 DEADLINE REACHED! 🎓</div>';
  }
}

function renderJourney() {
  const now = new Date();
  const span = TARGET - now;
  const track = document.getElementById('journeyTrack');
  const caption = document.getElementById('journeyCaption');
  track.querySelectorAll('.mark').forEach(el => el.remove());

  if (span <= 0) {
    caption.textContent = '🎓 The deadline has passed.';
    return;
  }

  const marks = [];
  let cursor = new Date(now.getFullYear(), now.getMonth(), 1);
  while (cursor < TARGET) {
    const next = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
    if (next > now && next < TARGET) {
      marks.push({ date: next, label: next.toLocaleString('en-GB', { month: 'short' }) });
    }
    cursor = next;
  }
  marks.push({ date: new Date(TARGET), label: '🎓' });

  marks.forEach((m, i) => {
    const raw = ((m.date - now) / span) * 100;
    const pct = Math.min(95, Math.max(3, raw));
    const el = document.createElement('div');
    el.className = 'mark' + (i === marks.length - 1 ? ' mark-end' : '');
    el.style.left = pct + '%';
    el.innerHTML = `<span class="mark-dot"></span><span class="mark-label">${m.label}</span>`;
    track.appendChild(el);
  });

  const nextMark = marks[0];
  const days = Math.ceil((nextMark.date - now) / 86400000);
  caption.textContent =
    nextMark.label === '🎓'
      ? `🎓 ${days} day${days === 1 ? '' : 's'} to go`
      : `${nextMark.label} in ${days} day${days === 1 ? '' : 's'}`;
}

function initBackground() {
  const isPortrait = window.innerWidth <= 768;
  const layer = document.getElementById('bgLayer');
  const used = [];

  function pickAndShow() {
    const pool = Array.from({ length: 49 }, (_, i) => i + 1);
    let available = pool.filter(i => !used.includes(i));
    if (available.length === 0) { used.length = 0; available = pool; }

    const idx = available[Math.floor(Math.random() * available.length)];
    used.push(idx);

    const src = `images/rotating/img-${String(idx).padStart(3, '0')}.jpg`;
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.onload = () => {
      layer.querySelectorAll('img').forEach(el => el.classList.remove('active'));
      img.classList.add('active');
    };
    img.onerror = () => img.remove();
    layer.appendChild(img);
  }

  pickAndShow();
  setInterval(pickAndShow, 10000);
}

let tickCtx = null;
const bgAudio = document.getElementById('bgMusic');
const songFiles = ['audio/cZid3J36wH8.mp3', 'audio/btPJPFnesV4.mp3', 'audio/2ognf_oRQWM.mp3'];
let songIndex = 0;

function playNextSong() {
  bgAudio.src = songFiles[songIndex];
  bgAudio.currentTime = 0;
  bgAudio.play().catch(() => {});
  songIndex = (songIndex + 1) % songFiles.length;
}

bgAudio.addEventListener('ended', playNextSong);
bgAudio.addEventListener('error', () => {
  if (!started) return;
  setTimeout(() => { if (started && bgAudio.paused) playNextSong(); }, 1000);
});

function startAudio() {
  if (started) return;
  started = true;
  document.getElementById('startOverlay').classList.add('hidden');
  if (!tickCtx) tickCtx = new (window.AudioContext || window.webkitAudioContext)();
  applyVolume();
  playNextSong();
}

document.addEventListener('click', startAudio, { once: true });
document.addEventListener('touchstart', startAudio, { once: true });
document.addEventListener('keydown', startAudio, { once: true });

const VOL_KEY = 'countdown_volume';
const LEGACY_VOL_KEY = 'graduation_volume';
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');
let muted = false;
let volume = Math.min(100, Math.max(0, parseInt(
  localStorage.getItem(VOL_KEY) || localStorage.getItem(LEGACY_VOL_KEY) || '35', 10
)));
volumeSlider.value = String(volume);

function applyVolume() {
  const effective = muted ? 0 : volume / 100;
  bgAudio.volume = effective;
  const silent = effective === 0;
  muteBtn.textContent = silent ? '🔇' : '🔊';
  muteBtn.classList.toggle('muted', silent);
  muteBtn.setAttribute('aria-pressed', String(silent));
}

volumeSlider.addEventListener('input', () => {
  volume = parseInt(volumeSlider.value, 10);
  muted = false;
  localStorage.setItem(VOL_KEY, String(volume));
  applyVolume();
});

muteBtn.addEventListener('click', () => {
  muted = !muted;
  applyVolume();
});

function playTick() {
  const level = muted ? 0 : (volume / 100) * 0.08;
  if (level === 0) return;
  try {
    if (!tickCtx) tickCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = tickCtx.createOscillator();
    const gain = tickCtx.createGain();
    osc.connect(gain);
    gain.connect(tickCtx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, tickCtx.currentTime);
    gain.gain.setValueAtTime(level, tickCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, tickCtx.currentTime + 0.04);
    osc.start(tickCtx.currentTime);
    osc.stop(tickCtx.currentTime + 0.04);
  } catch (e) {}
}

let seenMotivational = [];

function pickRandom(arr, seen) {
  const pool = arr.filter((_, i) => !seen.includes(i));
  if (pool.length === 0) seen.length = 0;
  const available = arr.filter((_, i) => !seen.includes(i));
  const idx = arr.indexOf(available[Math.floor(Math.random() * available.length)]);
  seen.push(idx);
  return arr[idx];
}

function updateReminder() {
  document.getElementById('reminder').textContent = reminders[Math.floor(Math.random() * reminders.length)];
}

function updateQuote() {
  const m = pickRandom(motivationalQuotes, seenMotivational);
  document.getElementById('motivationalText').textContent = `"${m.text}"`;
  document.getElementById('motivationalAuthor').textContent = `— ${m.author}`;
}

const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
let cols, drops;

function resizeMatrix() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cols = Math.floor(canvas.width / 14);
  drops = Array(cols).fill(1).map(() => Math.random() * canvas.height);
}
resizeMatrix();
window.addEventListener('resize', resizeMatrix);

function drawMatrix() {
  ctx.fillStyle = 'rgba(5, 5, 8, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#f00';
  ctx.font = '12px monospace';
  for (let i = 0; i < drops.length; i++) {
    const char = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(char, i * 14, drops[i]);
    if (drops[i] > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i] += 14;
  }
}
setInterval(drawMatrix, 60);

initBackground();

updateDisplay();
renderJourney();
updateQuote();
updateReminder();
applyVolume();

setInterval(() => {
  updateQuote();
  updateReminder();
}, 60000);

setInterval(renderJourney, 60000);

setInterval(() => {
  updateDisplay();
  playTick();
}, 1000);
