# Washlab Bot Protection & Edge Logic Guide

This guide provides instructions on how to set up infrastructure-level bot protection for your Next.js application, based on the **Anti-Gravity Protocol**.

To effectively stop bot spikes before they hit your Next.js application and consume server resources, you must configure rules at your CDN/DNS level (e.g., Cloudflare, Vercel).

## 1. Web Application Firewall (WAF) & Rate Limiting

Rate limiting restricts how many requests a single IP address can make within a given timeframe.

### If you are using Cloudflare:

1. Go to your Cloudflare Dashboard > **Security** > **WAF**.
2. Click **Rate Limiting rules** and **Create rule**.
3. **Rule configuration:**
   - **If incoming requests match:** All incoming requests.
   - **Rate:** `50` requests per `1 minute`.
   - **Action:** `Block` for `1 hour` (or `Managed Challenge` to present a Captcha).
4. Save and Deploy.

### If you are using Vercel:

1. Go to your Vercel Dashboard > Project > **Security**.
2. Under **Vercel WAF**, enable **Rate Limiting**.
3. Create a rule to limit traffic per IP (e.g., 50 requests / 60 seconds).
4. _(Note: Advanced WAF feature on Vercel requires a Pro/Enterprise plan. If you are on the Hobby plan, use Cloudflare as your DNS/CDN in front of Vercel or use the Next.js Middleware with Upstash Redis as provided in `middleware.ts`)._

---

## 2. "Under Attack Mode"

If you suddenly experience a massive traffic spike (DDoS or bot net), you can quickly toggle this mode to force all visitors to pass a JavaScript/Captcha challenge before viewing the site. This stops automated bots instantly.

### Cloudflare:

1. Go to Cloudflare Dashboard > **Overview**.
2. On the right-side panel under **Quick Actions**, toggle **Under Attack Mode** to **ON**.
3. _Turn this off once the attack subsides, as it slightly slows down the experience for legitimate users._

### Vercel:

1. Vercel WAF (Enterprise) has a comparable "Challenge" action you can quickly deploy in the Security tab, or you can temporarily enable **Attack Challenge Mode** if available on your plan.

---

## 3. Geoblocking

Since Washlab operates in Kenya, you can block or challenge traffic originating from countries where you do not do business. This eliminates a huge portion of generic bot traffic globally.

### Cloudflare:

1. Go to Cloudflare Dashboard > **Security** > **WAF** > **Custom rules**.
2. Click **Create rule**.
3. **Rule configuration:**
   - **Field:** `Country`
   - **Operator:** `does not equal`
   - **Value:** `Kenya`
   - **Action:** `Managed Challenge` (Recommended: this blocks most bots but allows legitimate humans with VPNs to pass a Captcha) OR `Block` (Aggressive).
4. Save and Deploy.

---

## 4. Log Analysis & IP Blacklisting

If you have specific IP addresses that you know are malicious based on your server logs:

1. In Cloudflare, go to **Security** > **WAF** > **Tools**.
2. Under **IP Access Rules**, enter the IP address.
3. Select Action -> **Block**.
4. Click **Add**.

_Next Steps: Review the `middleware.ts` file in your repository if you wish to handle software-level rate-limiting using Upstash Redis._
