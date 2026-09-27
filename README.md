# PromptCraft AI — Enterprise Micro-SaaS Blueprint

PromptCraft AI is a complete, production-ready, client-side Micro-SaaS web application built with **React**, **Vite**, and **Tailwind CSS**. It is designed to be hosted for **$0/month** on Vercel, Netlify, or Cloudflare Pages, while providing built-in monetization tools to convert visitors into paid subscribers.

---

## 🚀 Key Features & Micro-SaaS Architecture

1. **Zero Server Maintenance Cost ($0/mo Overhead)**
   - The application runs 100% client-side in the user's browser.
   - Includes a built-in prompt optimization engine that runs locally without external server bills.
   - Allows users to optionally supply their own **Google Gemini API Key** (Bring Your Own Key / BYOK).

2. **Built-In Freemium Monetization**
   - **Free Tier**: 3 refined prompts per 24 hours (tracked locally in `localStorage`).
   - **Rate-Limiting Paywall**: Triggers an interactive pricing modal once daily limits are reached.
   - **Pro Subscription**: $4.99/month or $14.99 one-time Lifetime Pass.
   - **Payment Provider Compatibility**: Easily links with Stripe Checkout, LemonSqueezy, PayPal, or Buy Me a Coffee.

3. **Multiple Output Formats**
   - **XML System Tags** (`<identity>`, `<directives>`, `<output_schema>`) for Claude 3.5 & Gemini 1.5/2.0.
   - **Structured Markdown** for GPT-4o system instructions.
   - **Plain System Prompts** for custom agent wrappers.

---

## 🛠️ $10 Capital Allocation Plan

| Item | Cost | Purpose |
|---|---|---|
| **Custom Domain** | **$8.50 / year** | Buy a custom `.com`, `.io`, or `.app` domain (e.g., via Porkbun or Namecheap) to build brand authority and rank on Google. |
| **Hosting (Vercel / Cloudflare)** | **$0.00** | Free tier includes SSL, global CDN, and unlimited bandwidth for micro-SaaS sites. |
| **API Costs** | **$0.00** | Client-side fallback engine handles basic requests; users bring their own API key for high-volume API calls. |
| **Remaining Seed Reserve** | **$1.50** | Keep as liquid reserve for domain renewal or payment testing. |

---

## ⚡ Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Launch dev server
npm run dev

# 3. Build for production deployment
npm run build
```

---

## 🌐 Deploying to Vercel (100% Free)

1. Create a free account at [Vercel.com](https://vercel.com).
2. Push this project folder to a GitHub repository.
3. Import the repository into Vercel.
4. Click **Deploy**. Vercel will auto-detect Vite and build the production site in ~30 seconds.
5. In Vercel Domain Settings, attach your **$8.50 custom domain**.

---

## 💳 Connecting Stripe Micro-Payments

1. Log into your [Stripe Dashboard](https://dashboard.stripe.com).
2. Create a Payment Link for **$4.99/month** (Recurring) or **$14.99** (One-Time).
3. Open `src/components/PricingModal.jsx` and replace the demo link (`https://buy.stripe.com/...`) with your actual Stripe Payment Link.
4. When users subscribe, Stripe collects the payment and transfers funds directly to your bank account.

---

## 🤖 How AI Agents Can Scale Traffic & Revenue

- **SEO Content Agent**: Use AI to auto-generate 10 blog posts targeting long-tail keywords (e.g., *"Best Claude system prompt format for developers"*).
- **Social Marketing Agent**: Monitor Reddit (`r/PromptEngineering`, `r/ChatGPT`) and X/Twitter for people seeking system prompt templates, replying with helpful prompt structures pointing to your tool.
- **Product Hunt Launch**: List the micro-app on Product Hunt, Hacker News, and BetaList for initial viral surge.
