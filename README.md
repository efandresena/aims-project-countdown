# 🎓 Graduation Day Countdown

A live countdown to **22 October 2026, midnight** — with rotating photos, a red Matrix
rain background, the *Final Countdown* soundtrack, a milestone timeline, and volume
controls.

**Live site:** https://aims-project-countdown.pages.dev/
**Original repo:** https://github.com/efandresena/aims-project-countdown

---

## What's inside

| Path | What it does |
|---|---|
| `index.html` | Page structure |
| `style.css` | All styling and the responsive layout |
| `app.js` | Countdown logic, photos, music, milestones, volume |
| `images/rotating/` | Background photos (`img-001.jpg` … `img-049.jpg`) |
| `audio/` | Three MP3s that play in order and loop |

No build step, no framework, no dependencies, no backend. It's plain HTML/CSS/JS — just
open `index.html` and it runs.

---

## Run it locally in 2 minutes

You need [Python 3](https://www.python.org/downloads/) (already installed on most
Linux and macOS machines).

```bash
git clone https://github.com/efandresena/aims-project-countdown.git
cd aims-project-countdown
python3 -m http.server 8080
```

Open <http://localhost:8080>.

Everything works offline, including the music and photos.

---

## What's on screen

- **Countdown** — days, hours, minutes, seconds to 22 October 2026
- **The Road Ahead** — a timeline of the months between today and graduation, with a
  caption counting down to the next milestone. There is deliberately **no percentage
  bar**, because we never knew when the countdown officially began, so any percentage
  would be made up.
- **Encouragement line** — rotates every minute
- **Rotating quote** — rotates every minute
- **Background** — a photo changes every 10 seconds, plus a red Matrix rain overlay
- **Audio panel** — bottom right: volume slider and mute button

---

## Common changes

### Change the countdown date

Open `app.js` and edit line 1:

```js
const TARGET = new Date('2026-10-22T00:00:00');
```

Use `YYYY-MM-DDTHH:MM:SS` — 24-hour time, so midnight is `00:00:00` and the last
second of a day is `23:59:59`. No timezone is specified, so each visitor sees the
countdown in their own local time.

### Change the colours

All the red lives in `style.css`. The main values:

| What | Value |
|---|---|
| Countdown numbers | `#ff3333` |
| Title, progress accents | `#cc3333` |
| Glows and tints | `rgba(255, 50, 50, …)` |
| Matrix rain | `#f00` in `app.js` |

Swap them for any colour you like. To change the rain to green, edit `ctx.fillStyle` in
`drawMatrix()`.

### Change the encouragement lines

In `app.js`, the `reminders` array near the top.

### Change the rotating quotes

Also in `app.js`, the `motivationalQuotes` array. Each entry looks like
`{ text: "...", author: "..." }`.

### Change the starting volume

In `app.js`:

```js
let volume = Math.min(100, Math.max(0, parseInt(localStorage.getItem(VOL_KEY) || '35', 10)));
```

`35` is the default percentage. Once a visitor moves the slider, their choice is
remembered in their browser instead.

---

## Adding photos

Photos live in `images/rotating/` and are named `img-001.jpg`, `img-002.jpg`, and so on.

1. Drop your image into `images/rotating/` using the next number in sequence. If
   `img-049.jpg` is the highest, add yours as `img-050.jpg`.
2. Open `app.js` and find this line inside `initBackground()`:

   ```js
   const pool = Array.from({ length: 49 }, (_, i) => i + 1);
   ```

3. Change `49` to your new total. With 50 photos, it becomes `50`.

That's it. Photos rotate every 10 seconds, picked at random, and never repeat until
every photo has been shown.

### A note on file size

Photos are shown full-screen, so large files make the page slow. Aim for under
**500 KB each** and **1600 px wide**. You can batch-resize with
[ImageMagick](https://imagemagick.org/):

```bash
cd images/rotating
for f in *.jpg; do
  convert "$f" -resize 1600x1600\> -quality 82 "tmp_$f"
done
for f in tmp_*.jpg; do mv "$f" "${f#tmp_}"; done
```

Keep the `.jpg` extension — the code only looks for `.jpg` files.

---

## Adding music

Drop MP3s into `audio/`, then list them in `app.js`:

```js
const songFiles = [
  'audio/cZid3J36wH8.mp3',
  'audio/btPJPFnesV4.mp3',
  'audio/2ognf_oRQWM.mp3',
];
```

They play one after another, then start over from the first track. Keep files
reasonably compressed (around 4 MB each is fine) — every visitor downloads the whole
playlist.

> **Don't add the `loop` attribute to the `<audio>` tag.** It looks harmless, but it
> makes the browser repeat one track forever, so the JavaScript `ended` handler never
> fires and only the first song is ever heard. The playlist wraps on its own inside
> `playNextSong()`. If a track fails to load, the `error` listener skips to the next
> one so the music never stalls.

> The "click anywhere to start" screen isn't decoration. Every browser blocks automatic
> audio until the visitor interacts with the page, so that first click is what unlocks
> sound.

---

## Deploy your own copy

The site is fully static, so deploying it is simple — no database, no environment
variables.

### Fork and clone

1. Sign in to [GitHub](https://github.com) and open
   [efandresena/aims-project-countdown](https://github.com/efandresena/aims-project-countdown)
2. Click **Fork** (top right)
3. Clone *your* fork:

   ```bash
   git clone https://github.com/YOUR-USERNAME/aims-project-countdown.git
   cd aims-project-countdown
   ```

### Deploy to Cloudflare Pages

1. Sign in to [Cloudflare](https://dash.cloudflare.com/) — the free plan is fine
2. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Pick your fork, branch `main`
4. Build command: *leave empty*
5. Build output directory: `/`
6. **Save and Deploy**

Your site is live on a `https://YOUR-PROJECT.pages.dev` address.

### Or deploy with the Wrangler CLI

```bash
npm install -g wrangler
wrangler login
wrangler pages deploy . --project-name YOUR-PROJECT
```

### Any other static host

Because there's no build step, the folder works as-is on Netlify, Vercel, GitHub Pages,
or any web server. Point the host at the repository root.

---

## Contributing

```bash
git clone https://github.com/efandresena/aims-project-countdown.git
cd aims-project-countdown

# create a branch
git checkout -b my-change

# ...make your edits, then:
git add .
git commit -m "Describe what you changed"
git push origin my-change
```

Then open a [pull request](https://github.com/efandresena/aims-project-countdown/pulls)
against `main`.

Pushing straight to `main` also works — Cloudflare redeploys automatically on every
commit.

---

## Notes and limitations

- **No backend.** Nothing is stored or saved. The only thing kept in the browser is
  your volume setting, in `localStorage`.
- **No timezone on the countdown.** Every visitor sees it in their own local time, so
  it won't read the same in Tananarive and Lisbon.
- **Sound needs one click** on every visit, because browsers block autoplay.
- **Photos rotate every 10 seconds**; the timer ticks every second.
- **The Matrix rain** draws to a canvas at ~8% opacity, so it's decorative and costs
  very little. Delete the `<canvas id="matrixCanvas">` element and the `drawMatrix()`
  function to turn it off.

---

Built by the AIMS Class of 2026 🎓
