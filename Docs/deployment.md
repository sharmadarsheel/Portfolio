# Deployment & Hosting Pipeline

## 1. Hosting Environment
* **Platform:** Vercel or GitHub Pages configured for continuous integration.
* **Branching Strategy:** `main` branch auto-deploys upon successful build verification.

## 2. Performance Thresholds
* Mandatory asset compression (textures, 3D models).
* Non-critical resource deferral to guarantee fast initial load times on mobile and desktop networks.