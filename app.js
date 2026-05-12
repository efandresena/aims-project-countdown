const TARGET = new Date('2026-06-11T23:59:59');
const START = new Date('2026-05-12T00:00:00');
const STORAGE_KEY = 'countdown_notes';
const LAST_DAY_KEY = 'countdown_last_day';
const FUNNY_SEEN_KEY = 'funny_seen';

const quotes = [
  { text: "À cœur vaillant rien d'impossible.", author: "Proverbe Français", lang: "Français" },
  { text: "L'union fait la force.", author: "Proverbe Français", lang: "Français" },
  { text: "Qui vivra verra.", author: "Proverbe Français", lang: "Français" },
  { text: "Tout vient à point à qui sait attendre.", author: "Proverbe Français", lang: "Français" },
  { text: "Mieux vaut tard que jamais.", author: "Proverbe Français", lang: "Français" },
  { text: "L'habit ne fait pas le moine.", author: "Proverbe Français", lang: "Français" },
  { text: "Il n'y a pas de fumée sans feu.", author: "Proverbe Français", lang: "Français" },
  { text: "Nécessité est mère d'invention.", author: "Proverbe Français", lang: "Français" },
  { text: "La vérité sort de la bouche des enfants.", author: "Proverbe Français", lang: "Français" },
  { text: "Le temps c'est de l'argent.", author: "Proverbe Français", lang: "Français" },
  { text: "Ny tsiny toy ny rivotra: mikasika ny tena, fa tsy hita tarehy.", author: "Ohabolana Malagasy", lang: "Malagasy" },
  { text: "Ny voky tsy mahaleo ny tsaroana.", author: "Ohabolana Malagasy", lang: "Malagasy" },
  { text: "Aza asesiky ny fitia tanteraka, ka tsy mahalala ny ranonorana ho avy.", author: "Ohabolana Malagasy", lang: "Malagasy" },
  { text: "Manasa lamba be tseroka; na madio aza, mangarahara.", author: "Ohabolana Malagasy", lang: "Malagasy" },
  { text: "Vivy nanitrika ka bongo mason' ny nahiny.", author: "Ohabolana Malagasy", lang: "Malagasy" },
  { text: "Aleo very tsikalakalam-bola toy ny very tsikalakalam-pihavanana.", author: "Ohabolana Malagasy", lang: "Malagasy" },
  { text: "Ny fahazotoana no vakin-karena.", author: "Ohabolana Malagasy", lang: "Malagasy" },
  { text: "Da wasa ake fadawa wawa magana.", author: "Karin Magana (Hausa)", lang: "Hausa" },
  { text: "Dan'uwa rabin jiki.", author: "Karin Magana (Hausa)", lang: "Hausa" },
  { text: "Babu laifi, babu tunani.", author: "Karin Magana (Hausa)", lang: "Hausa" },
  { text: "Hakuri maganin duniya.", author: "Karin Magana (Hausa)", lang: "Hausa" },
  { text: "Mahukurci mawadaci.", author: "Karin Magana (Hausa)", lang: "Hausa" },
  { text: "Rigakafi ya fi magani.", author: "Karin Magana (Hausa)", lang: "Hausa" },
  { text: "Zaman duniya iyawa ne.", author: "Karin Magana (Hausa)", lang: "Hausa" },
  { text: "Haraka haraka haina baraka.", author: "Methali ya Kiswahili", lang: "Swahili" },
  { text: "Pole pole ndio mwendo.", author: "Methali ya Kiswahili", lang: "Swahili" },
  { text: "Mtu ni watu.", author: "Methali ya Kiswahili", lang: "Swahili" },
  { text: "Akili ni nywele, kila mtu ana zake.", author: "Methali ya Kiswahili", lang: "Swahili" },
  { text: "Haba na haba hujaza kibaba.", author: "Methali ya Kiswahili", lang: "Swahili" },
  { text: "Maji yakimwagika hayazoleki.", author: "Methali ya Kiswahili", lang: "Swahili" },
  { text: "Subira ina malipo.", author: "Methali ya Kiswahili", lang: "Swahili" },
  { text: "Mwenye radhi hasumbuki.", author: "Methali ya Kiswahili", lang: "Swahili" },
  { text: "Dawa ya moto ni moto.", author: "Methali ya Kiswahili", lang: "Swahili" },
  { text: "Asiyesikia la mkuu huvunjika guu.", author: "Methali ya Kiswahili", lang: "Swahili" },
  { text: "ክፉ ቀን እና ዝግምግምን ጎንበስ ብሎ ማሳለፍ", author: "የአማርኛ ምሳሌ (Amharic)", lang: "አማርኛ (Amharic)" },
  { text: "ቀስ በቀስ እንቁላል በእግሩ ይሄዳል", author: "የአማርኛ ምሳሌ", lang: "አማርኛ (Amharic)" },
  { text: "ድር ቢያብር አንበሳ ያስር", author: "የአማርኛ ምሳሌ", lang: "አማርኛ (Amharic)" },
  { text: "ጊዜ ወርቅ ነው", author: "የአማርኛ ምሳሌ", lang: "አማርኛ (Amharic)" },
  { text: "ማየት ማመን ነው", author: "የአማርኛ ምሳሌ", lang: "አማርኛ (Amharic)" },
  { text: "ንገረው ንገረው እምቢ ካለ መከራ ይምከረው", author: "የአማርኛ ምሳሌ", lang: "አማርኛ (Amharic)" },
  { text: "በሽታውን የደበቀ መድሀኒት አይገኝለትም", author: "የአማርኛ ምሳሌ", lang: "አማርኛ (Amharic)" },
  { text: "ዞሮ ዞሮ ወደቤት ኖሮ ኖሮ ወደ መሬት", author: "የአማርኛ ምሳሌ", lang: "አማርኛ (Amharic)" },
  { text: "ካለ መናገር ደጅ አዝማችነት ይቀራል", author: "የአማርኛ ምሳሌ", lang: "አማርኛ (Amharic)" },
  { text: "ስዕል እና ዘመድን ከሩቅ ነው የሚያምረው", author: "የአማርኛ ምሳሌ", lang: "አማርኛ (Amharic)" },
  { text: "Tikoro nkɔ agyina.", author: "Twi Proverb (Ghana)", lang: "Twi (Ghana)" },
  { text: "Anomaa antu a, ɔbua da.", author: "Twi Proverb (Ghana)", lang: "Twi (Ghana)" },
  { text: "Dua baako gye mframa a ɛbu.", author: "Twi Proverb (Ghana)", lang: "Twi (Ghana)" },
  { text: "Nsateaa nyinaa nnyɛ pɛ.", author: "Twi Proverb (Ghana)", lang: "Twi (Ghana)" },
  { text: "Berɛ te sɛ anomaa, woankyere no na otu a, wonhu no bio.", author: "Twi Proverb (Ghana)", lang: "Twi (Ghana)" },
  { text: "Sɛ wopɛ ahwenepa a, fa adwempa.", author: "Twi Proverb (Ghana)", lang: "Twi (Ghana)" },
  { text: "Agorɔ besɔ a, efiri anopɔ.", author: "Twi Proverb (Ghana)", lang: "Twi (Ghana)" },
  { text: "Ɔkɔtɔ nwo anoma.", author: "Twi Proverb (Ghana)", lang: "Twi (Ghana)" },
  { text: "Nea ɔforo dua pa na wɔpia no.", author: "Twi Proverb (Ghana)", lang: "Twi (Ghana)" },
  { text: "Obi nkyerɛ abɔfra Nyame.", author: "Twi Proverb (Ghana)", lang: "Twi (Ghana)" },
  { text: "Ingane engakhali ifela embelekweni.", author: "IsiZulu (South Africa)", lang: "isiZulu (South Africa)" },
  { text: "Akulahlwa imbeleko ngokufelwa.", author: "IsiZulu (South Africa)", lang: "isiZulu (South Africa)" },
  { text: "Izandla ziyagezana.", author: "IsiZulu (South Africa)", lang: "isiZulu (South Africa)" },
  { text: "Inkomo ingazala umuntu.", author: "IsiZulu (South Africa)", lang: "isiZulu (South Africa)" },
  { text: "Ukuzala ukuzelula.", author: "IsiZulu (South Africa)", lang: "isiZulu (South Africa)" },
  { text: "Isalakutshelwa sibona ngomopho.", author: "IsiZulu (South Africa)", lang: "isiZulu (South Africa)" },
  { text: "Akukho soka elingenasici.", author: "IsiZulu (South Africa)", lang: "isiZulu (South Africa)" },
  { text: "Ikhiwane elihle ligcwala izibungu.", author: "IsiZulu (South Africa)", lang: "isiZulu (South Africa)" },
  { text: "Akukho qaba lingenazintyatyambo.", author: "IsiXhosa (South Africa)", lang: "isiXhosa (South Africa)" },
  { text: "Umntu ngumntu ngabantu.", author: "IsiXhosa (South Africa)", lang: "isiXhosa (South Africa)" },
  { text: "Isandla siyahlamba esinye.", author: "IsiXhosa (South Africa)", lang: "isiXhosa (South Africa)" },
  { text: "Boontjie kry sy loontjie.", author: "Afrikaans (South Africa)", lang: "Afrikaans (South Africa)" },
  { text: "Die appel val nie ver van die boom nie.", author: "Afrikaans (South Africa)", lang: "Afrikaans (South Africa)" },
  { text: "Elke hond kry sy dag.", author: "Afrikaans (South Africa)", lang: "Afrikaans (South Africa)" },
  { text: "Moenie 'n berg van 'n molshoop maak nie.", author: "Afrikaans (South Africa)", lang: "Afrikaans (South Africa)" },
  { text: "Vroeë voël vang die wurm.", author: "Afrikaans (South Africa)", lang: "Afrikaans (South Africa)" },
  { text: "Skoenmaker se kinders loop kaalvoet.", author: "Afrikaans (South Africa)", lang: "Afrikaans (South Africa)" },
  { text: "Agteros kom ook in die kraal.", author: "Afrikaans (South Africa)", lang: "Afrikaans (South Africa)" },
  { text: "Stille waters, diepe grond, onder draai die duiwel rond.", author: "Afrikaans (South Africa)", lang: "Afrikaans (South Africa)" },
  { text: "Adìẹ funfun kò mọ ara rẹ̀ lágbà.", author: "Òwe Yorùbá (Nigeria)", lang: "Yorùbá (Nigeria)" },
  { text: "Ọbẹ̀ kìí gbé inú àgbà mì.", author: "Òwe Yorùbá (Nigeria)", lang: "Yorùbá (Nigeria)" },
  { text: "Diẹ̀ díẹ̀ nimú ẹlẹ́dẹ̀ẹ́ fi ńwọgbà.", author: "Òwe Yorùbá (Nigeria)", lang: "Yorùbá (Nigeria)" },
  { text: "Ilé ọba tójó ẹwà ló bùsi.", author: "Òwe Yorùbá (Nigeria)", lang: "Yorùbá (Nigeria)" },
  { text: "Ìwà lẹ̀sìn.", author: "Òwe Yorùbá (Nigeria)", lang: "Yorùbá (Nigeria)" },
  { text: "Ẹni tí kò gbọ́ ti àgbà, ó gbọ́ ti àgbọn.", author: "Òwe Yorùbá (Nigeria)", lang: "Yorùbá (Nigeria)" },
  { text: "Gidi gidi bụ ugwu eze.", author: "Ilu Igbo (Nigeria)", lang: "Igbo (Nigeria)" },
  { text: "Oge adịghị eche mmadụ.", author: "Ilu Igbo (Nigeria)", lang: "Igbo (Nigeria)" },
  { text: "Chọọ ewu ojii ka chi dị.", author: "Ilu Igbo (Nigeria)", lang: "Igbo (Nigeria)" },
  { text: "Ihere adịghị eme onye ara kama ọ na-eme ụmụnna ya.", author: "Ilu Igbo (Nigeria)", lang: "Igbo (Nigeria)" },
  { text: "Otu onye tụọ izu, o gbue ọchụ.", author: "Ilu Igbo (Nigeria)", lang: "Igbo (Nigeria)" },
  { text: "Ilu bụ mmanụ eji eri okwu.", author: "Ilu Igbo (Nigeria)", lang: "Igbo (Nigeria)" },
  { text: "Ebule laa azụ, ọ bịa ọgụ.", author: "Ilu Igbo (Nigeria)", lang: "Igbo (Nigeria)" },
  { text: "A na-agwa onye nwere ntị okwu.", author: "Ilu Igbo (Nigeria)", lang: "Igbo (Nigeria)" },
  { text: "Makali ya jicho yashinda wembe.", author: "Kenyan Swahili", lang: "Kenyan Swahili" },
  { text: "Kupotea njia ndiyo kujua njia.", author: "Kenyan Swahili", lang: "Kenyan Swahili" },
  { text: "Kila chombo huenda kwa mwendewe.", author: "Kenyan Swahili", lang: "Kenyan Swahili" },
  { text: "Umekuja na lako, usichunguze la mwenzako.", author: "Kenyan Swahili", lang: "Kenyan Swahili" },
  { text: "Nuɖɔɖɔ gbɛ ɖo.", author: "Fon Proverb (Benin)", lang: "Fon (Benin)" },
  { text: "When a leaf falls to the ground, the tree gets the blame.", author: "Cameroonian Proverb", lang: "Cameroon" },
  { text: "You cannot be a mouse and a bat at the same time.", author: "Cameroonian Proverb", lang: "Cameroon" },
  { text: "Where there is no shame, there is no honor.", author: "Cameroonian Proverb", lang: "Cameroon" },
  { text: "Wisdom is like fire. People take it from others.", author: "Cameroonian Proverb", lang: "Cameroon" },
];

const reminders = ["Don't forget to have fun!", "Don't forget to rest!"];

const BG_IMAGES = [
  'images/backgrounds/bg-2.jpg',
  'images/backgrounds/bg-5.jpg',
  'images/backgrounds/bg-6.jpg',
  'images/backgrounds/bg-7.jpg',
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
  document.getElementById('daysRemain').textContent = t.days;

  if (t.total === 0) {
    document.querySelector('.timer').innerHTML = '<div class="times-up">TIME\'S UP DUMBASS!</div>';
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

function initGallery(containerId, images, intervalMs) {
  const gallery = document.getElementById(containerId);
  images.forEach((src, i) => {
    const img = document.createElement('img');
    img.className = 'gallery-img' + (i === 0 ? ' active' : '');
    img.src = src;
    img.alt = '';
    img.loading = 'lazy';
    gallery.appendChild(img);
  });

  let idx = 0;
  setInterval(() => {
    const imgs = gallery.querySelectorAll('.gallery-img');
    imgs.forEach(img => img.classList.remove('active'));
    idx = (idx + 1) % imgs.length;
    imgs[idx].classList.add('active');
  }, intervalMs);
}

function loadFunnyImages() {
  const seen = JSON.parse(localStorage.getItem(FUNNY_SEEN_KEY) || '[]');
  const count = 31;
  const all = Array.from({ length: count }, (_, i) => `images/funny_images/funny-${i + 1}.jpg`);
  const allFormats = [
    ...all,
    ...Array.from({ length: count }, (_, i) => `images/funny_images/funny-${i + 1}.jpeg`),
    ...Array.from({ length: count }, (_, i) => `images/funny_images/funny-${i + 1}.png`),
  ];

  const unseen = allFormats.filter(p => !seen.includes(p));
  if (unseen.length === 0) return;

  const chosen = unseen[Math.floor(Math.random() * unseen.length)];
  seen.push(chosen);
  localStorage.setItem(FUNNY_SEEN_KEY, JSON.stringify(seen));

  const gallery = document.getElementById('rightGallery');
  const img = document.createElement('img');
  img.className = 'gallery-img';
  img.src = chosen;
  img.alt = 'Funny';
  img.loading = 'lazy';
  img.onerror = () => img.remove();
  img.onload = () => {
    gallery.appendChild(img);
    setTimeout(() => img.classList.add('active'), 100);
  };
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

function updateReminder() {
  const hour = getCurrentHour();
  document.getElementById('reminder').textContent = reminders[hour % reminders.length];
}

function updateQuote() {
  const hour = getCurrentHour();
  const q = quotes[hour % quotes.length];
  document.getElementById('quoteLang').textContent = q.lang;
  document.getElementById('quoteText').textContent = `"${q.text}"`;
  document.getElementById('quoteAuthor').textContent = `— ${q.author}`;
}

function checkHourChange() {
  const prevHour = parseInt(localStorage.getItem('last_hour') || '-1', 10);
  const currHour = getCurrentHour();

  if (currHour !== prevHour) {
    localStorage.setItem('last_hour', String(currHour));
    updateQuote();
    updateReminder();
    loadFunnyImages();
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
        body: 'What have you done today? How is your research going?',
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

initGallery('leftGallery', BG_IMAGES, 8000);
initGallery('rightGallery', BG_IMAGES.slice().reverse(), 10000);
loadFunnyImages();

updateDisplay();
updateQuote();
updateReminder();
checkHourChange();
checkDayChange();

let prevHour = getCurrentHour();

setInterval(() => {
  updateDisplay();
  const h = getCurrentHour();
  if (h !== prevHour) {
    prevHour = h;
    checkHourChange();
  }
}, 1000);

setInterval(checkDayChange, 10000);
