<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1wtUy1PzClh1bXcnJNalwKSbQnC0Vr1Bz

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

The easiest way to deploy your app is to use the [Vercel Platform](https://vercel.com/new).

### Custom Domain (Versi Pendek)

To use your own short domain (e.g., `batikku.com` or `btk.id`):
1. Go to your project settings in the Vercel Dashboard.
2. Select **Domains**.
3. Add your domain name.
4. Follow the instructions to configure your DNS records (A and CNAME).

Once configured, your app will be accessible via your own professional short link.
