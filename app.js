const TARGET = new Date('2026-07-16T11:00:00');
const START = new Date('2026-05-12T00:00:00');
const MSG_KEY = 'congrats_messages';


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
  "Congratulations on your graduation! 🎓",
  "You did it! All your hard work paid off!",
  "Thanks for the amazing journey!",
  "Proud of everything you've accomplished!",
  "Here's to your bright future!",
  "Well done, graduate!",
  "Celebrate your success today!",
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
    document.querySelector('.timer').innerHTML = '<div class="times-up">🎓 CONGRATULATIONS GRADUATE! 🎓</div>';
  }

  const totalMs = TARGET - START;
  const elapsed = totalMs - t.total;
  const pct = Math.min(100, Math.max(0, (elapsed / totalMs) * 100));
  document.getElementById('progressFill').style.width = pct.toFixed(2) + '%';
  document.getElementById('progressText').textContent = pct.toFixed(1) + '% complete';
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
  bgAudio.play().catch(() => {});
  songIndex = (songIndex + 1) % songFiles.length;
}

bgAudio.addEventListener('ended', playNextSong);

document.addEventListener('click', () => {
  if (bgAudio.paused) playNextSong();
}, { once: true });

function playTick() {
  try {
    if (!tickCtx) tickCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = tickCtx.createOscillator();
    const gain = tickCtx.createGain();
    osc.connect(gain);
    gain.connect(tickCtx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, tickCtx.currentTime);
    gain.gain.setValueAtTime(0.08, tickCtx.currentTime);
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

const MSG_STORE = JSON.parse(localStorage.getItem(MSG_KEY) || '[]');
const feedScroll = document.getElementById('feedScroll');
let feedAnimId = null;

function renderFeed() {
  feedScroll.innerHTML = '';
  if (MSG_STORE.length === 0) return;
  const inner = document.createElement('div');
  inner.className = 'feed-scroll-inner';
  const frag = document.createDocumentFragment();
  MSG_STORE.slice().reverse().forEach(m => {
    const el = document.createElement('div');
    el.className = 'feed-msg';
    el.innerHTML = `<div class="feed-msg-name">${escHtml(m.name)}</div><div class="feed-msg-text">${escHtml(m.text)}</div>`;
    frag.appendChild(el);
  });
  inner.appendChild(frag);
  feedScroll.appendChild(inner);
  const h = inner.scrollHeight;
  inner.style.height = h + 'px';
  let pos = 0;
  if (feedAnimId) cancelAnimationFrame(feedAnimId);
  function animate() {
    pos += 0.3;
    if (pos >= h + feedScroll.clientHeight) {
      pos = 0;
    }
    inner.style.transform = `translateY(${Math.min(pos, h)}px)`;
    feedAnimId = requestAnimationFrame(animate);
  }
  animate();
}

function escHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

document.getElementById('sendMsgBtn').onclick = () => {
  document.getElementById('msgOverlay').classList.remove('hidden');
};

document.getElementById('submitMsg').onclick = () => {
  const name = document.getElementById('msgName').value.trim();
  const text = document.getElementById('msgText').value.trim();
  if (!name || !text) return;
  MSG_STORE.push({ name, text, date: Date.now() });
  localStorage.setItem(MSG_KEY, JSON.stringify(MSG_STORE));
  document.getElementById('msgName').value = '';
  document.getElementById('msgText').value = '';
  document.getElementById('msgOverlay').classList.add('hidden');
  renderFeed();
};

document.getElementById('msgOverlay').onclick = (e) => {
  if (e.target === e.currentTarget) {
    document.getElementById('msgOverlay').classList.add('hidden');
  }
};

renderFeed();

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
  ctx.fillStyle = '#0f0';
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
updateQuote();
updateReminder();

setInterval(() => {
  updateQuote();
  updateReminder();
}, 60000);

setInterval(() => {
  updateDisplay();
  playTick();
}, 1000);
