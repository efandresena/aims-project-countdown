# 🎓 Graduation Day Countdown

A live countdown to **22 October 2026, midnight** — with rotating photos, a Matrix rain
background, the *Final Countdown* soundtrack on loop, and a scrolling guestbook where
classmates leave messages.

**Live site:** https://aims-project-countdown.pages.dev/
**Original repo:** https://github.com/efandresena/aims-project-countdown

---

## What's inside

| Path | What it does |
|---|---|
| `index.html` | Page structure |
| `style.css` | All styling and the responsive layout |
| `app.js` | Countdown logic, photos, music, guestbook |
| `images/rotating/` | Background photos (`img-001.jpg` … `img-049.jpg`) |
| `audio/` | Three MP3s that play on loop |
| `functions/api/messages.js` | Cloudflare Function — saves and reads guestbook messages |
| `schema.sql` | The database table definition |

No build step, no framework, no dependencies. It's plain HTML/CSS/JS.

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

> **Heads-up:** the guestbook will be empty locally, because the database only exists
> in Cloudflare. Everything else (countdown, photos, music) works fine offline.

---

## Common changes

### Change the countdown date

Open `app.js` and edit line 1:

```js
const TARGET = new Date('2026-10-22T00:00:00');
```

Use `YYYY-MM-DDTHH:MM:SS` — this is 24-hour time, so midnight is `00:00:00` and
midnight at the end of a day is `23:59:59`. No timezone is specified, so it uses the
visitor's local time.

### Change the colours

All the green lives in `style.css`. Search for `#33ff33` (the bright countdown
numbers) and `#33cc33` (the dimmer title and progress bar). Swap them for any hex
colour.

### Change the messages that rotate under the timer

They're in `app.js`, in the `reminders` array near the top.

### Change the rotating quotes

Also in `app.js`, in the `motivationalQuotes` array. Each entry looks like
`{ text: "...", author: "..." }`.

---

## Adding photos

Photos live in `images/rotating/` and are named `img-001.jpg`, `img-002.jpg`, and so on.

1. Drop your image into `images/rotating/` with the next number in sequence.
   If `img-049.jpg` is the highest, add yours as `img-050.jpg`.
2. Open `app.js` and find this line inside `initBackground()`:

   ```js
   const pool = Array.from({ length: 49 }, (_, i) => i + 1);
   ```

3. Change `49` to your new total. If you now have 50 photos, it becomes `50`.

That's it. Photos rotate every 10 seconds, chosen at random, and never repeat until
every photo has been shown.

### A note on file size

Photos are displayed full-screen, so large files make the page slow. Aim for under
**500 KB each** and **1600 px wide**. On a Mac or Linux you can batch-resize with
[ImageMagick](https://imagemagick.org/):

```bash
cd images/rotating
for f in *; do
  convert "$f" -resize 1600x1600\> -quality 82 "small_$f"
done
mv small_* /tmp/ && mv /tmp/small_* .
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

They play one after another and loop forever. Keep files reasonably compressed
(around 4 MB each is fine) — every visitor downloads the whole playlist.

> The "click anywhere to start" screen isn't decoration. Every browser blocks
> automatic audio until the visitor interacts with the page, so that first click is
> what unlocks sound.

---

## Setting up your own copy (fork + Cloudflare)

The quickest route if you want your own version with your own database.

### 1. Fork it

1. Sign in to [GitHub](https://github.com) and open
   [efandresena/aims-project-countdown](https://github.com/efandresena/aims-project-countdown)
2. Click **Fork** (top right)
3. Clone *your* fork:

   ```bash
   git clone https://github.com/YOUR-USERNAME/aims-project-countdown.git
   cd aims-project-countdown
   ```

### 2. Create the database

1. Sign in to [Cloudflare](https://dash.cloudflare.com/) — the free plan is fine
2. **Workers & Pages** → **D1** → **Create database** → name it `messages`
3. Open the **Console** tab and run:

   ```sql
   CREATE TABLE IF NOT EXISTS messages (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name TEXT NOT NULL,
     text TEXT NOT NULL,
     created_at TEXT DEFAULT (datetime('now'))
   );
   ```

### 3. Deploy the site

1. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Pick your fork, branch `main`
3. Build command: *leave empty*
4. Build output directory: `/`
5. **Save and Deploy**

### 4. Connect the database

This is the step people miss — without it, the guestbook returns an error.

1. Go to your Pages project → **Settings** → **Functions**
2. Under **D1 database bindings** → **Add binding**
3. Variable name: `DB` — exactly, capital letters
4. Choose the `messages` database
5. Save, then redeploy from the **Deployments** tab

Your site is now live on a `https://YOUR-PROJECT.pages.dev` address with a working
guestbook.

---

## How the guestbook works

`app.js` sends a `GET` to `/api/messages` on load and every 15 seconds after.
The Cloudflare Function in `functions/api/messages.js` answers it, reading and
writing to the `DB` D1 binding. Posting a message sends a `POST` with `{ name, text }`.

Names are capped at 50 characters and messages at 500. All text is escaped before
being displayed, so pasted HTML can't break the page.

There's no login and no rate limiting, which is fine for a guestbook between
classmates. If it ever gets spammed, add a check to the `POST` handler in
`functions/api/messages.js`.

---

## Deploying without touching Cloudflare's dashboard

If you use the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/):

```bash
npm install -g wrangler
wrangler login

# one-time: create the database and note the ID it prints
wrangler d1 create messages

# run the schema
wrangler d1 execute messages --file=./schema.sql

# deploy
wrangler pages deploy . --project-name YOUR-PROJECT
```

---

## Contributing

Straightforward Git workflow:

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

- **Guestbook entries can't be deleted** from the UI. Clear them by hand:
  `DELETE FROM messages;` in the D1 console.
- **No timezone on the countdown.** Every visitor sees the countdown in their own
  local time, so it won't read the same in Tananarive and Lisbon.
- **Sound requires one click** on every visit, by browser policy.
- **Photos rotate every 10 seconds**, and the timer updates every second.

---

Built by the AIMS Class of 2026 🎓
