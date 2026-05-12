const TARGET = new Date('2026-06-11T23:59:59');
const START = new Date('2026-05-12T00:00:00');
const STORAGE_KEY = 'countdown_notes';
const LAST_DAY_KEY = 'countdown_last_day';
const FUNNY_SEEN_KEY = 'funny_seen';

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

const culturalQuotes = [
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

function initBackground() {
  const allImages = [...BG_IMAGES];

  const seen = JSON.parse(localStorage.getItem(FUNNY_SEEN_KEY) || '[]');
  for (let i = 0; i < 31; i++) {
    for (const ext of ['jpg', 'jpeg', 'png']) {
      allImages.push(`images/funny_images/funny-${i + 1}.${ext}`);
    }
  }

  const layer = document.getElementById('bgLayer');
  let idx = 0;

  function setBg(i) {
    const img = document.createElement('img');
    img.src = allImages[i % allImages.length];
    img.alt = '';
    img.loading = 'lazy';
    img.onload = () => {
      layer.querySelectorAll('img').forEach(el => el.classList.remove('active'));
      img.classList.add('active');
    };
    img.onerror = () => img.remove();
    layer.appendChild(img);
  }

  setBg(0);
  setInterval(() => {
    idx++;
    setBg(idx);
  }, 600000);
}

let tickCtx = null;
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
let seenCultural = [];

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
  const c = pickRandom(culturalQuotes, seenCultural);
  document.getElementById('motivationalText').textContent = `"${m.text}"`;
  document.getElementById('motivationalAuthor').textContent = `— ${m.author}`;
  document.getElementById('quoteLang').textContent = c.lang;
  document.getElementById('quoteText').textContent = `"${c.text}"`;
  document.getElementById('quoteAuthor').textContent = `— ${c.author}`;
}

function checkHourChange() {
  const prevHour = parseInt(localStorage.getItem('last_hour') || '-1', 10);
  const currHour = getCurrentHour();

  if (currHour !== prevHour) {
    localStorage.setItem('last_hour', String(currHour));
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
