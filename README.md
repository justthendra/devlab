# 🚀 DevLab – Modern Browser-Based Developer Tools

**DevLab** is a premium, privacy-first web platform built with **Next.js 16**, **TailwindCSS**, and **WASM-powered FFmpeg**. It offers a suite of high-performance utilities for developers and designers that run entirely in the browser using WebAssembly.

> **Privacy Focused:** All processing happens client-side. Your files never leave your device.

---

## ✨ Key Features

- **🎨 Modern Aesthetic:** Glassmorphism design, ambient animated backgrounds, and a custom physics-based cursor.
- **🌍 Internationalization:** Full support for English, Turkish, German, French, and Spanish.
- **⚡ Client-Side Processing:** Powered by WebAssembly (FFmpeg.wasm) for heavy media tasks without server uploads.
- **🌙 Dark/Light Mode:** Seamless theme switching with persistent preferences.

---

## 🛠️ Tools Collection

### � Media & Video
| Tool | Description |
|------|-------------|
| **MP4 → WEBM Converter** | Convert videos to WebM format efficiently. |
| **MP4 → MP3 Converter** | Extract high-quality audio from video files. |
| **Video Trimmer** | Trim and cut videos with frame precision. |
| **Video to GIF** | Create optimized GIFs from video clips. |
| **MP3 Downloader** | Download audio from sources *(Linux/Docker recommended)*. |

### 🖼️ Images & Graphics
| Tool | Description |
|------|-------------|
| **Background Remover** | AI-powered background removal running locally. |
| **Image Compressor** | Reduce image size without losing quality. |
| **Image Resizer** | Resize dimensions while maintaining aspect ratio. |
| **Image Cropper** | Crop images to specific aspect ratios or freeform. |
| **JPG → WEBP** | Convert images to modern efficient formats. |
| **SVG → PNG** | Rasterize vector graphics to PNG. |
| **Color Palette Extractor** | Get dominant colors and gradients from images. |
| **GIF Optimizer** | Compress and optimize GIF files. |
| **Image to Text (OCR)** | Extract text from images using Tesseract.js. |

### 👨‍💻 Code & Dev Utilities
| Tool | Description |
|------|-------------|
| **Code Formatter** | Prettify JavaScript, JSON, HTML, and CSS. |
| **CSS Minifier** | Minify CSS code for production. |
| **JS Minifier/Beautifier** | Minify or beautify JavaScript code. |
| **HTML Beautifier** | Clean and format HTML code. |
| **CSS Glow Generator** | Visual editor for creating CSS box-shadow glows. |
| **UUID Generator** | Generate random UUIDs (v4). |
| **Hash Generator** | Create MD5, SHA-1, SHA-256 hashes. |
| **Base64 Converter** | Encode and decode text or files to Base64. |
| **URL Encoder/Decoder** | Safe URL string formatting. |
| **QR Code Generator** | Custom QR codes with colors and logos. |
| **Regex Tester** | Test and validate regular expressions. |
| **Markdown Preview** | Real-time Markdown editing and preview (GitHub style). |

---

## 🖥️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** TailwindCSS v4, Framer Motion
- **Core Processing:** FFmpeg.wasm (WebAssembly)
- **Language:** TypeScript
- **Icons:** Lucide React, React Icons
- **Internationalization:** next-intl

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ **20.0.0**
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/justthendra/devlab.git
cd devlab

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Docker Support (Recommended for Media Tools)
Some tools like the MP3 downloader work best in a Linux environment due to FFmpeg constraints on Windows.

```bash
# Build and run with Docker
docker-compose up --build
```

---

## ⚙️ Configuration

### FFmpeg WASM Setup
This project uses `ffmpeg.wasm`. The necessary core files should be placed in `public/ffmpeg/`:
- `ffmpeg-core.js`
- `ffmpeg-core.wasm`

**Note on SharedArrayBuffer:**
To use FFmpeg.wasm, the server must create a cross-origin isolated environment. `next.config.ts` is configured with:
```ts
headers: [
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
]
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

> Built with 💙 by **[Thendra](https://github.com/justthendra)**
