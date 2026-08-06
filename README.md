# Tarang Gupta — Portfolio

A single-page e-portfolio / e-resume site. Dark navy + brass "ledger" theme,
built to look like a finance research note — no build tools, no frameworks,
just HTML/CSS/JS. Deploys straight to GitHub Pages.

## Files

```
index.html    → all the content
style.css     → all the styling
script.js     → tiny scroll-highlight enhancement (site works without it)
assets/
  Tarang_Gupta_Resume.pdf  → the résumé, linked from the "Download résumé" buttons
```

## 1. Before you deploy — edit these two things

Open `index.html` and search for:

- `mailto:tarang.gupta@example.com` → replace with your real email (appears twice)
- `https://linkedin.com/in/your-handle` → replace with your real LinkedIn URL

If you update your résumé later, just replace the file at
`assets/Tarang_Gupta_Resume.pdf` and keep the same filename — every download
link on the page will automatically point to the new version.

## 2. Deploy on GitHub Pages

**Option A — GitHub website (no terminal needed)**

1. Go to [github.com/new](https://github.com/new) and create a new **public**
   repository, e.g. `tarang-portfolio`.
2. On the new repo's page, click **Add file → Upload files**.
3. Drag in `index.html`, `style.css`, `script.js`, and the `assets` folder
   (with the PDF inside it) — keep that folder structure.
4. Commit the files.
5. Go to **Settings → Pages**.
6. Under **Build and deployment → Source**, choose **Deploy from a branch**.
7. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
8. Wait ~1 minute, then refresh the Pages settings — your live URL will
   appear at the top, something like:
   `https://<your-username>.github.io/tarang-portfolio/`

**Option B — Git command line**

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/tarang-portfolio.git
git push -u origin main
```

Then repeat steps 5–8 above in the repo's **Settings → Pages**.

## 3. Optional: use a project name instead of your username

If you'd rather the URL read `github.io/tarang-portfolio` than a bare
username URL, that's already what you get by default with a repo named
`tarang-portfolio`. If you want the shorter root URL
(`https://<username>.github.io/`), name the repository exactly
`<your-username>.github.io` instead.

## 4. Custom domain (optional)

In **Settings → Pages → Custom domain**, add your domain and follow GitHub's
DNS instructions. GitHub Pages issues a free HTTPS certificate automatically
once DNS is verified.

## Making changes later

Everything is plain HTML/CSS in `index.html` and `style.css` — no build step.
Edit, commit, push, and GitHub Pages redeploys automatically within a minute
or two.
