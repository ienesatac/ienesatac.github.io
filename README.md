# Ibrahim Enes Atac — Personal Website (`enesatac.org`)

Clean, accessible static academic website hosted on **GitHub Pages** with zero build dependencies.

## How to Make Edits (in 30 Seconds)

You never need to install software, run terminal commands, or edit HTML tags. You can make edits right on **GitHub.com** in any web browser:

### 1. Update Your CV
1. Open the [`files/`](files/) folder on GitHub.
2. Click **Add file → Upload files**, drag in your new PDF named **`cv.pdf`** (replacing the existing `cv.pdf`), and click **Commit changes**.
3. Your CV updates across the entire site in ~15 seconds.

### 2. Edit Bio, Papers, News, or Teaching
1. Click on **[`content.js`](content.js)** and click the **Edit (pencil)** icon.
2. Make your change:
   - **Move a paper from Under Review to Forthcoming/Published:** Change `status: "under_review"` to `"forthcoming"` or `"published"`, and fill in `venue`, `year`, `doi`, and `pdf` (upload the PDF to `files/`).
   - **Add a news item:** Paste a `{ date: "...", text: "...", link: "..." }` entry at the top of `news`. The newest 5 items appear automatically on the Home page, and all items appear on the News page.
   - **Update your role/affiliation:** Edit `role`, `department`, `institution`, and `email` at the top of `profile`.
3. Click **Commit changes** — live in ~15 seconds.

---

## Connecting `enesatac.org` (Zero-Downtime DNS Setup)

Once this repository is pushed to GitHub and GitHub Pages is enabled (**Settings → Pages → Deploy from branch: `main` / `/ (root)`**):

1. At your domain registrar (where you bought `enesatac.org`), set these DNS records:
   - **4 `A` records** for `@` (`enesatac.org` — fixes `enesatac.org` without `www` too!):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **1 `CNAME` record** for `www`:
     - Points to `ienesatac.github.io` (Cloudflare Proxy status: **DNS only / grey cloud**)
2. In your GitHub repo (**Settings → Pages → Custom domain**), enter `enesatac.org` and click **Save** (this creates a `CNAME` file in your repo).
3. Wait a few minutes for GitHub's DNS check to pass, then check **Enforce HTTPS**.
4. Once `https://enesatac.org` and `https://www.enesatac.org` load your new site with the lock icon, you can safely cancel your Owlstown subscription.
