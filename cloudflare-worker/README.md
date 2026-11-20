# Cloudflare Worker Resend Proxy

A serverless proxy running on **Cloudflare Workers (100% Free Tier — 100,000 requests/day, no credit card required)** that securely forwards inquiries from the Kshirsa Technology Solutions website to Resend without exposing your API key to the browser.

---

## 🚀 Setup Guide (Choose Method 1 or 2)

### Method 1: Cloudflare Web Dashboard (Easiest — 2 Minutes, No CLI)

1. **Log in / Sign up:**
   Go to [dash.cloudflare.com](https://dash.cloudflare.com/) (free account, no credit card needed).

2. **Create a Worker:**
   - In the left sidebar, click **Workers & Pages** &rarr; **Create application** &rarr; **Create Worker**.
   - Name it `kshirsa-contact-worker` (or any name you prefer).
   - Click **Deploy**.

3. **Paste the Code:**
   - On the next screen, click **Edit code**.
   - Select all existing code and delete it.
   - Copy everything from [`cloudflare-worker/src/index.js`](./src/index.js) and paste it into the editor.
   - Click **Deploy** in the top right.

4. **Add your Resend API Key as an Encrypted Secret:**
   - In the Worker settings, navigate to **Settings** &rarr; **Variables and Secrets**.
   - Under **Secrets**, click **Add**.
   - Name: `RESEND_API_KEY`
   - Value: `re_BujjcHvX_Jq3asgFGvFFPo2YtAbR28PTK` (your Resend API key)
   - Click **Save and deploy**.

5. **Copy Your Worker URL:**
   - At the top of the Worker page, copy your Worker URL (it looks like `https://kshirsa-contact-worker.<your-subdomain>.workers.dev`).

---

### Method 2: Command Line (Wrangler CLI)

From your project terminal:

```bash
cd cloudflare-worker

# 1. Login to your Cloudflare account
npx wrangler login

# 2. Add your secret API key (prompt will ask you to paste it)
npx wrangler secret put RESEND_API_KEY

# 3. Deploy the worker
npx wrangler deploy
```

Copy the URL printed in the terminal (e.g. `https://kshirsa-contact-worker.<subdomain>.workers.dev`).

---

## 🔗 Connect Worker to the Website

### A. For Local Development:

Open `.env` in the project root and add:

```env
CONTACT_PROXY_URL=https://kshirsa-contact-worker.<your-subdomain>.workers.dev
```

### B. For GitHub Actions (Production Deployment):

1. Go to your GitHub repository:
   **Settings** &rarr; **Secrets and variables** &rarr; **Actions** &rarr; **Variables** tab (or Secrets tab).
2. Click **New repository variable**.
3. Name: `VITE_CONTACT_PROXY_URL`
4. Value: `https://kshirsa-contact-worker.<your-subdomain>.workers.dev`
5. Click **Add variable**.

On your next `git push origin main`, GitHub Actions will automatically inject this URL during build time!
