const TARGET = new Date('2026-06-11T23:59:59');
const START = new Date('2026-05-12T00:00:00');
const STORAGE_KEY = 'countdown_notes';
const LAST_DAY_KEY = 'countdown_last_day';


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

function getDaysElapsed() {
  const now = new Date();
  const diff = now - START;
  if (diff < 0) return 0;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getCurrentHour() {
  return new Date().getHours();
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
let audioMuted = false;
const bgAudio = document.getElementById('bgMusic');
const songFiles = ['audio/cZid3J36wH8.mp3', 'audio/btPJPFnesV4.mp3', 'audio/2ognf_oRQWM.mp3'];
let songIndex = 0;

function playNextSong() {
  if (audioMuted) return;
  bgAudio.src = songFiles[songIndex];
  bgAudio.play().catch(() => {});
  songIndex = (songIndex + 1) % songFiles.length;
}

bgAudio.addEventListener('ended', playNextSong);

document.getElementById('muteBtn').onclick = () => {
  audioMuted = !audioMuted;
  document.getElementById('muteBtn').textContent = audioMuted ? '🔇' : '🔊';
  document.getElementById('muteBtn').classList.toggle('muted', audioMuted);
  if (audioMuted) {
    bgAudio.pause();
  } else {
    if (bgAudio.paused) playNextSong();
  }
};

document.addEventListener('click', () => {
  if (bgAudio.paused && !audioMuted) playNextSong();
}, { once: true });

function playTick() {
  if (audioMuted) return;
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

function playDing(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'day') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523, ctx.currentTime);
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.45);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.45);
    } else {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.25);
    }
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

function checkHourChange() {
  const prevHour = parseInt(localStorage.getItem('last_hour') || '-1', 10);
  const currHour = getCurrentHour();

  if (currHour !== prevHour) {
    localStorage.setItem('last_hour', String(currHour));
    if (prevHour !== -1) {
      playDing('hour');
    }
  }
}

function checkDayChange() {
  const prevDay = parseInt(localStorage.getItem(LAST_DAY_KEY) || '0', 10);
  const currDay = getDaysElapsed();

  if (currDay > prevDay && currDay > 0) {
    localStorage.setItem(LAST_DAY_KEY, String(currDay));
    playDing('day');
    showReflectionOverlay(currDay);

    if (Notification.permission === 'granted') {
      new Notification('Day ' + currDay + ' Complete! 🎯', {
        body: 'One day closer to graduation! Keep going!',
      });
    }
  } else if (currDay === 0 && prevDay === 0) {
    localStorage.setItem(LAST_DAY_KEY, '0');
  }
}

function showReflectionOverlay(day) {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const existing = stored.find(e => e.day === day);
  if (existing) return;

  document.getElementById('overlayDay').textContent = day;
  document.getElementById('dailyNote').value = '';
  document.getElementById('reflectionOverlay').classList.remove('hidden');

  document.getElementById('saveNote').onclick = () => {
    const note = document.getElementById('dailyNote').value.trim();
    if (note) {
      stored.push({ day, note, date: new Date().toISOString() });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    }
    document.getElementById('reflectionOverlay').classList.add('hidden');
  };
}

if ('Notification' in window && Notification.permission === 'default') {
  Notification.requestPermission();
}

initBackground();

updateDisplay();
updateQuote();
updateReminder();
checkHourChange();
checkDayChange();

setInterval(() => {
  updateQuote();
  updateReminder();
}, 60000);

let prevHour = getCurrentHour();

setInterval(() => {
  updateDisplay();
  playTick();
  const h = getCurrentHour();
  if (h !== prevHour) {
    prevHour = h;
    checkHourChange();
  }
}, 1000);

setInterval(checkDayChange, 10000);
