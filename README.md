# 🚀 DevLab – Modern Browser-Based Developer Tools

A cutting-edge web platform built with **Next.js 14**, **TailwindCSS**, and **WASM-powered FFmpeg**, offering browser-based utilities for developers and designers.

DevLab provides instant conversion, formatting, QR generation, and visual effects without requiring local tools. Completely client-side – no uploads, no data storage.

---

## 🌟 Features & Tools

| Tool | Description |
|------|-------------|
| 🎬 MP4 → WEBM Converter | Convert videos directly in the browser using FFmpeg (WASM-based). |
| 🧹 JavaScript Beautifier | Automatically formats messy JS code. |
| 🌀 CSS Glow/Gradient Generator | Creates modern gradient glow effects for CSS. |
| 🔍 JSON / Lua Formatter | Enhances readability of code & config files. |
| 🎨 Color Palette Extractor | Extracts color schemes from uploaded images. |
| 📷 JPG → WEBP Optimizer | Image format conversion (browser-based). |
| 🌀 GIF Optimizer | Lightweight GIF processing. |
| 🔢 QR Code Generator | High-quality QR code generation + PNG download. |
| 🎧 MP3 Downloader *(Temporarily disabled)* | YouTube to MP3 conversion (Temporarily disabled). |
| 📁 Upcoming | More frontend & media tools on the way. |

> ⚠️ Note: MP3 Downloader support is limited due to FFmpeg Windows restrictions. Recommended to run using Linux Docker.

---

## 🖥️ Tech Stack

- **Next.js 14 (App Router)**
- **React 19 + Framer Motion**
- **TailwindCSS + Custom Dark UI**
- **TypeScript**
- **WASM FFmpeg**
- **Lucide Icons + FontAwesome**
- **Client-side utilities only – no backend processing**

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/devlab.git
cd devlab

# Install dependencies
npm install

# Run development server
npm run dev
```

⚠️ If using **FFmpeg-related tools**, ensure:
- Node.js ≥ **20.9.0**
- On **Linux/Docker environment** (Windows WSL often fails FFmpeg conversion)

---

## ⚙️ Configuration

### 📁 Public Assets
Place FFmpeg files under:

```
/public/ffmpeg
  ├─ ffmpeg.min.js
  ├─ ffmpeg-core.js
  └─ ffmpeg-core.wasm
```

### 🔧 \`next.config.ts\` Example

```ts
experimental: {
  serverActions: { bodySizeLimit: "1mb" },
},
webpack: (config) => {
  config.externals = [...(config.externals || []), "ffmpeg-static"];
  return config;
},
headers() {
  return [
    {
      source: "/:path*",
      headers: [
        { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
      ],
    },
  ];
},
```

---

## 🌎 Deployment

Recommended platforms:
- **Vercel (for non-FFmpeg tools)**
- **Docker on Linux** for full compatibility (including MP3 tools)

---

## 🤝 Contributing

Contributions, ideas, and bug reports are **always welcome**!

```bash
# Fork → Work → Pull Request
```

---

## 🗺️ Roadmap

- SVG Optimizer
- CSS Animation Builder
- Frontend UI Snippet Generator
- AI-Powered Auto Code Fixer

---

## 📬 Contact & Community

| Platform | Link |
|----------|------|
| 🌐 Website | https://devlab.vercel.app (example) |
| 💬 Discord | https://discord.gg/JWx8qJ7B8W |
| 🐙 GitHub | https://github.com/justthendra |
| 💼 Portfolio | https://thendra.xyz |

---

## 📄 License

MIT License  
Feel free to use, modify, and contribute.

---

## 💡 Final Words

> DevLab was built for developers who want speed, creativity, and efficiency—without clutter.  
> Designed and developed by **Thendra** with passion 💙

---

✨ *If you like this project, don't forget to give it a star!*  
