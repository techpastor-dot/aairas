# AAIRA'S LAUNDRY SERVICES — Website v2

A clean, responsive multi-page website. Clean URLs powered by folder structure + vercel.json.

## 📁 File Structure

```
aairas-laundry/
├── index.html          ← Home  →  yoursite.com/
├── services/
│   └── index.html      ← Services  →  yoursite.com/services
├── order/
│   └── index.html      ← Order Form  →  yoursite.com/order
├── contact/
│   └── index.html      ← Contact & Map  →  yoursite.com/contact
├── shared.css          ← Styles shared across all pages
├── shared.js           ← Nav + animations shared across all pages
├── vercel.json         ← Tells Vercel to use clean URLs (no .html)
└── README.md
```

## 🚀 Deploy to Vercel via GitHub

### STEP 1 — Create a GitHub Account
Go to **https://github.com** → Sign up (free).

---

### STEP 2 — Create a New Repository

1. Click **+** → **New repository**
2. Name: `aairas-laundry`
3. Visibility: **Public**
4. Do NOT tick "Add a README" — we have one
5. Click **Create repository**

---

### STEP 3 — Upload Files

**Option A — Browser upload (no coding needed):**

1. On your empty GitHub repo page, click **"uploading an existing file"**
2. Drag ALL files AND folders at once:
   ```
   index.html
   shared.css
   shared.js
   vercel.json
   README.md
   services/        ← upload the whole folder
   order/           ← upload the whole folder
   contact/         ← upload the whole folder
   ```
   > **Tip:** On GitHub's upload page, you can drag an entire folder and it preserves the folder structure.
3. Commit message: `Initial commit`
4. Click **Commit changes**

**Option B — Git CLI:**

```bash
cd aairas-laundry   # your project folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aairas-laundry.git
git push -u origin main
```

---

### STEP 4 — Create a Vercel Account

1. Go to **https://vercel.com**
2. Click **Sign Up** → **Continue with GitHub**
3. Authorize Vercel

---

### STEP 5 — Deploy

1. Vercel dashboard → **Add New Project**
2. Find **aairas-laundry** → click **Import**
3. Settings:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Everything else: default
4. Click **Deploy** ⚡

Your site is live in ~30 seconds at:
```
https://aairas-laundry.vercel.app
```

---

## ✅ Clean URLs — How It Works

The `vercel.json` file contains:
```json
{ "cleanUrls": true, "trailingSlash": false }
```

Combined with the folder structure, Vercel serves:
- `/`           →  `index.html`
- `/services`   →  `services/index.html`
- `/order`      →  `order/index.html`
- `/contact`    →  `contact/index.html`

**No `.html` ever appears in the URL.**

---

## ✏️ Updating the Map

The map on the Contact page shows Warri, Delta State. To pin your exact shop address:

1. Open `contact/index.html`
2. Find the `<iframe>` tag
3. Replace the `src=` URL by going to **Google Maps**:
   - Search your exact address
   - Click **Share** → **Embed a map**
   - Copy the iframe `src` link and paste it in

---

## ♻️ Updating the Site

**Via GitHub website:**
1. Navigate to the file → click ✏️ edit
2. Make changes → **Commit changes**
3. Vercel auto-redeploys in seconds ✨

**Via Git:**
```bash
git add .
git commit -m "Updated prices"
git push
```

---

## 📞 Business Info

| | |
|---|---|
| WhatsApp | +234 912 746 1108 |
| Call | 08134112989 |
| Location | Warri, Delta State, Nigeria |
| Mon–Fri | 8:30 AM – 6:00 PM |
| Saturday | 8:30 AM – 4:00 PM |
| Sunday | Closed |
| Turnaround | 48 hours |
