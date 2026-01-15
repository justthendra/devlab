export const en = {
  // Navbar
  navbar: {
    tools: "Tools",
    docs: "Docs",
    about: "About",
    searchPlaceholder: "Search tools...",
  },

  // Tools list
  toolNames: {
    mp4towebm: "MP4 → WEBM",
    mp4tomp3: "MP4 → MP3",
    jpgtowebp: "JPG → WEBP",
    gifoptimize: "GIF Optimize",
    cssglow: "Gradient Generator",
    formatter: "JSON + Lua Formatter",
    qrcode: "QR Code Generator",
    mp3downloader: "MP3 Downloader",
    imageGenerator: "AI Image Generator",
    colorpalette: "Color Palette Extractor",
    jsbeautify: "JavaScript Beautify & Minify",
    // Phase 1 tools
    base64: "Base64 Encoder/Decoder",
    urlencoder: "URL Encoder/Decoder",
    uuid: "UUID Generator",
    hash: "Hash Generator",
    regex: "Regex Tester",
    cssminify: "CSS Minifier",
    htmlbeautify: "HTML Beautify",
    markdown: "Markdown Preview",
    // Phase 2 tools
    imageresizer: "Image Resizer",
    imagecropper: "Image Cropper",
    imagecompressor: "Image Compressor",
    svgtopng: "SVG to PNG",
    // Phase 3 tools
    videotrimmer: "Video Trimmer",
    videotogif: "Video to GIF",
    // Phase 4 tools
    backgroundremover: "Background Remover",
    imagetotext: "Image to Text (OCR)",
  },

  // Hero section
  hero: {
    badge: "DevLab • Browser-based toolset",
    title1: "Convert, Optimize,",
    title2: "from a single hub.",
    description: "DevLab offers video, audio, image, and code tools",
    descriptionHighlight: "entirely in the browser",
    descriptionEnd: "no installation, no account – just open and use.",
    exploreTools: "Explore Tools",
    quickLinks: "Quick Links",
    allTools: "All Tools",
    jsonFormatter: "JSON/Lua Formatter",
    qrGenerator: "QR Code Generator",
    colorPalette: "Color Palette Extractor",
    featuredTool: "Featured Tool",
    videoTool: "Video Tool",
    devTool: "Dev Tool",
  },

  // Featured tools
  featuredTools: {
    mp4towebm: {
      title: "🎬 MP4 → WEBM Converter",
      desc: "Browser-based, quality-controlled video converter.",
    },
    jsbeautify: {
      title: "✨ JavaScript Beautify & Minify",
      desc: "Instantly format or minimize JS code.",
    },
  },

  // Middle section
  middle: {
    title: "Why DevLab?",
    description: "DevLab offers modern, browser-based tools for individual developers, designers, and productivity enthusiasts. Solutions designed to accelerate coding and design processes—no installation required.",
    features: {
      browserBased: "🔌 Browser-Based",
      fast: "⚡ Fast & Light",
      uiux: "🎨 UI/UX Friendly",
      productivity: "🚀 Productivity-Focused",
    },
  },

  // Last section
  last: {
    contribute: "Contribute",
    description: "DevLab is developed with an open-source spirit. Got any ideas?",
  },

  // Footer
  footer: {
    developedBy: "Developed with",
    product: "Product",
    legal: "Legal",
    social: "Social",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    desc: "Privacy-first, browser-based tools for developers and creators.",
    changelog: "Changelog",
    roadmap: "Roadmap",
    cookies: "Cookie Policy",
    licenses: "Licenses",
    ourStory: "Our Story",
    contact: "Contact",
    support: "Support",
    allRightsReserved: "All rights reserved.",
    by: "by",
    tools: "Tools",
    docs: "Documentation",
  },

  // Tools page
  toolsPage: {
    title: "Tools Hub",
    description: "Browser-based media conversion tools.",
    noUpload: "No data is uploaded to any server.",
  },

  // Page content
  pages: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: January 2026",
      intro: "Your privacy is important to us. This policy explains how we handle your data.",
      sections: {
        collect: { title: "Information We Collect", content: "We do not collect any personal data. All processing happens locally in your browser." },
        usage: { title: "How We Use Information", content: "Since we don't collect data, we don't use it. Your files never leave your device." },
        cookies: { title: "Cookies", content: "We use local storage only for saving your preferences (like theme and language)." },
      },
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last updated: January 2026",
      intro: "By using DevLab, you agree to these terms.",
      sections: {
        usage: { title: "Acceptable Use", content: "You may use our tools for any legal purpose. Do not use them for illegal activities." },
        disclaimer: { title: "Disclaimer", content: "The tools are provided 'as is'. We are not responsible for any data loss." },
      },
    },
    contact: {
      title: "Contact Us",
      desc: "Have a question or feedback? We'd love to hear from you.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
      }
    },
    changelog: {
      title: "Changelog",
      desc: "Track the evolution of DevLab.",
      versions: [
        { version: "v1.0.0", date: "2026-01-10", desc: "Initial release with core video and image tools." },
        { version: "v1.1.0", date: "2026-01-12", desc: "Added Multi-language support (EN, TR, DE, FR, ES)." },
        { version: "v1.2.0", date: "2026-01-15", desc: "UI Overhaul: Glassmorphism, animations, and new tools hub." },
      ]
    },
    roadmap: {
      title: "Roadmap",
      desc: "What's coming next to DevLab.",
      items: [
        { status: "planned", title: "Cloud Sync", desc: "Optional cloud backup for your settings." },
        { status: "in-progress", title: "More AI Tools", desc: "Expanding our AI capabilities for text and code." },
        { status: "completed", title: "Tools Hub Redesign", desc: "A fresh new look for better navigation." },
      ]
    },
    cookies: {
      title: "Cookie Policy",
      lastUpdated: "Last updated: January 2026",
      intro: "We believe in minimizing data collection. Here is how we use cookies.",
      sections: {
        whatare: { title: "What are Cookies?", content: "Small text files stored on your device to save preferences." },
        howweuse: { title: "How We Use Them", content: "We strictly use local storage for your theme (Dark/Light) and language preferences. No tracking cookies are used." }
      }
    },
    licenses: {
      title: "Licenses",
      intro: "DevLab is built using open source software. We are grateful to the community.",
      libraries: [
        { name: "Next.js", license: "MIT License" },
        { name: "React", license: "MIT License" },
        { name: "Tailwind CSS", license: "MIT License" },
        { name: "Lucide React", license: "ISC License" },
        { name: "Framer Motion", license: "MIT License" }
      ]
    }
  },

  // Tool descriptions
  toolDescriptions: {
    mp4towebm: "Browser-based format converter.",
    mp4tomp3: "Convert video to audio.",
    jpgtowebp: "Image optimization.",
    gifoptimize: "GIF compression.",
    mp3downloader: "Download MP3s from YouTube and other services.",
    cssglow: "Customizable CSS glow/orb generator.",
    formatter: "Paste your code and format it.",
    qrcode: "Create customizable QR codes.",
    colorpalette: "Extract dominant color palettes from images.",
    jsbeautify: "JavaScript formatting and minification.",
    imageGenerator: "Generate images from text prompts using AI.",
    // Phase 1 tools
    base64: "Encode/decode Base64 strings.",
    urlencoder: "Encode/decode URL strings.",
    uuid: "Generate UUID v4 identifiers.",
    hash: "Generate MD5, SHA-1, SHA-256 hashes.",
    regex: "Test regular expressions live.",
    cssminify: "Minify CSS code.",
    htmlbeautify: "Format and beautify HTML.",
    markdown: "Live markdown preview.",
    // Phase 2 tools
    imageresizer: "Resize images to any dimension.",
    imagecropper: "Crop images with aspect ratio presets.",
    imagecompressor: "Compress images for web optimization.",
    svgtopng: "Convert SVG to PNG with scaling.",
    // Phase 3 tools
    videotrimmer: "Trim video clips directly in browser.",
    videotogif: "Convert video clips to animated GIFs.",
    // Phase 4 tools
    backgroundremover: "Remove image backgrounds automatically.",
    imagetotext: "Extract text from images using OCR.",
  },

  // About page
  about: {
    title: "About",
    description: "DevLab is a fast and secure platform that performs media conversions directly in your browser. No files are uploaded to any server.",
    whyDevlab: {
      title: "🚀 Why DevLab?",
      desc: "Files are processed on-device, privacy is preserved, and performance is ultra fast.",
    },
    technology: {
      title: "🛠 Technology",
      desc: "Built with Next.js, WebAssembly, FFmpeg, Tailwind CSS, and Framer Motion.",
    },
    vision: {
      title: "🌍 Vision",
      desc: "Create simple, secure, and accessible media conversion tools for everyone.",
    },
    developer: {
      title: "👤 Developer",
      desc: "Designed by Thendra, focused on modern UI and performance-oriented systems.",
    },
    contact: "For more information or to get in touch:",
  },

  // Docs pages
  docs: {
    title: "Documentation",
    description: "Technical documentation for DevLab: build process, security model, and developer information.",
    sections: {
      gettingStarted: { title: "🚀 Getting Started", desc: "Quick start guide for using DevLab." },
      howItWorks: { title: "🧠 How It Works", desc: "Browser-based FFmpeg pipeline and WebAssembly model." },
      security: { title: "🔒 Security & Privacy", desc: "No files are uploaded. All processing happens on-device." },
      ffmpeg: { title: "⚙️ FFmpeg Technology", desc: "Libraries used, version details, and optimal quality settings." },
      api: { title: "📦 API / Modularity", desc: "Developer integration and tool modules overview." },
      faq: { title: "❓ Frequently Asked Questions", desc: "Troubleshooting, performance, and support." },
    },
    gettingStarted: {
      title: "🚀 Getting Started",
      description: "DevLab is a modern platform for media conversion that runs entirely in your browser. No files are uploaded; conversions happen 100% on your device.",
      steps: {
        step1: { title: "Choose a tool", desc: "Pick the converter you need from the home page or Tools Hub (e.g., MP4 → WEBM)." },
        step2: { title: "Upload your file", desc: "Drag and drop or click to select your video/image. Nothing is sent to the internet." },
        step3: { title: "Pick a quality", desc: "Choose fast, medium, or high quality (FFmpeg parameters are applied automatically)." },
        step4: { title: "Convert and download", desc: "Conversion happens entirely in the browser and provides a downloadable output." },
      },
      goToTools: "Go to Tools Hub →",
      backToDocs: "← Documentation",
      nextPage: "How It Works →",
    },
    howItWorks: {
      title: "🧠 How It Works",
      description: "DevLab runs FFmpeg technology via WebAssembly directly in your browser. Conversion uses your device's CPU and no data is sent to any server.",
      steps: {
        step1: { title: "📂 1. File is loaded in the browser", desc: "Your video is selected from your device; it is never sent to a server." },
        step2: { title: "⚙️ 2. FFmpeg WebAssembly starts", desc: "FFmpeg runs via a WASM core controlled by JavaScript (client-side)." },
        step3: { title: "💻 3. Video is processed in memory", desc: "Algorithms begin conversion and optimize based on the selected quality." },
        step4: { title: "🚀 4. Output file is created", desc: "The resulting WebM file is produced in memory and provided for download." },
      },
      comparison: {
        title: "📊 Technical Comparison",
        feature: "Feature",
        browserBased: "Browser-based",
        serverBased: "Server-based",
        privacy: "Privacy",
        privacyHigh: "✔ High",
        privacyLow: "✘ Low",
        performance: "Performance",
        deviceCpu: "Device CPU power",
        sharedServer: "Shared server resources",
        speed: "Speed",
        speedHigh: "High (local processing)",
        speedMedium: "Medium",
        securityRisk: "Security Risk",
        riskLow: "Low",
        riskHigh: "High",
      },
      backToDocs: "← Documentation",
      nextPage: "Security & Privacy →",
    },
    security: {
      title: "🔒 Security & Privacy",
      description: "DevLab is designed with privacy as the top priority. No files ever leave your device.",
      principles: {
        p1: { title: "🔐 Zero Upload Policy", desc: "Your files are never uploaded to any server. All processing happens locally in your browser." },
        p2: { title: "🛡️ Client-Side Processing", desc: "FFmpeg runs entirely in WebAssembly within your browser. No external API calls for conversion." },
        p3: { title: "🗑️ No Data Storage", desc: "DevLab doesn't store any user data. Once you close the tab, everything is gone." },
        p4: { title: "🌐 Open Architecture", desc: "The codebase is designed to be transparent and auditable." },
      },
      backToDocs: "← Documentation",
      nextPage: "FFmpeg Technology →",
    },
    ffmpeg: {
      title: "⚙️ FFmpeg Technology",
      description: "DevLab uses FFmpeg compiled to WebAssembly for browser-based media processing.",
      details: {
        d1: { title: "📦 FFmpeg Version", desc: "FFmpeg 6.0 compiled with Emscripten for WebAssembly." },
        d2: { title: "🎬 Supported Formats", desc: "MP4, WEBM, MP3, GIF, JPG, PNG, WEBP and more." },
        d3: { title: "⚡ Quality Presets", desc: "Fast (CRF 35), Medium (CRF 28), High (CRF 23) for optimal balance." },
        d4: { title: "🔧 Codec Support", desc: "VP9, VP8, H.264, AAC, MP3, Opus audio codecs." },
      },
      backToDocs: "← Documentation",
      nextPage: "API & Modularity →",
    },
    api: {
      title: "📦 API / Modularity",
      description: "DevLab is built with a modular architecture for easy extension and integration.",
      features: {
        f1: { title: "🧩 Modular Components", desc: "Each tool is a self-contained React component that can be reused." },
        f2: { title: "🔌 Plugin Architecture", desc: "Add new tools by following the established component pattern." },
        f3: { title: "📡 Future API Plans", desc: "REST API endpoints for headless integration are planned." },
        f4: { title: "📖 Open Source", desc: "GitHub repository will be available for contributions." },
      },
      backToDocs: "← Documentation",
      nextPage: "FAQ →",
    },
    faq: {
      title: "❓ Frequently Asked Questions",
      description: "Common issues and solutions when using DevLab.",
      questions: {
        q1: { q: "📌 Why does conversion take long?", a: "Processing uses your device's CPU. Larger files take longer to convert." },
        q2: { q: "🚨 Stuck at 'FFmpeg loading…'?", a: "On first launch, FFmpeg WebAssembly files are fetched and cached in memory. Slow connections can delay this. Try refreshing the page." },
        q3: { q: "🔒 Is my file uploaded to the internet?", a: "No. Everything happens in your browser. No data is sent to any server or external service." },
        q4: { q: "📱 Does it work on mobile?", a: "Mobile browsers may perform worse. For stability, a desktop browser is recommended." },
        q5: { q: "🎞 Conversion stopped or the progress bar froze—how to fix?", a: "Your browser memory may be full. Refresh and try again. Chrome tends to handle large files better." },
        q6: { q: "🖥 Which browsers are supported?", a: "Chrome, Edge, and Brave work well. Safari may have reduced WebAssembly performance." },
        q7: { q: "🔌 Is the GPU used?", a: "No. Browser-based FFmpeg uses only the CPU; GPU acceleration isn't supported." },
        q8: { q: "🧩 Can other formats (GIF, MP3, etc.) be added?", a: "Yes. New tools can be added by adjusting FFmpeg command parameters while keeping the same structure." },
        q9: { q: "🧠 Access to source code or docs?", a: "Coming soon on GitHub. DevLab is designed with a modular, extensible architecture." },
      },
      helpNote: "📬 Need help? Support and GitHub issue tracking will be available soon.",
      backToDocs: "Back to documentation home →",
      prevPage: "← API & Modularity",
    },
  },

  // Language names
  languages: {
    en: "English",
    tr: "Türkçe",
    de: "Deutsch",
    fr: "Français",
    es: "Español",
  },

  // Common tool UI strings
  tools: {
    common: {
      catVideoAudio: "Video & Audio",
      catImage: "Images & Graphics",
      catDev: "Developer & Utilities",
      selectFile: "Select file",
      clickOrDrag: "Click or drag and drop",
      fileSelected: "File Selected",
      converting: "Converting...",
      optimizing: "Optimizing...",
      processing: "Processing...",
      download: "Download",
      copy: "Copy",
      copied: "Copied",
      clear: "Clear",
      preview: "Preview",
      quality: {
        fast: "⚡ Fast",
        medium: "🎯 Medium",
        high: "💎 High",
        low: "🔉 Low",
      },
      ffmpegLoading: "🔄 FFmpeg is preparing, the first launch may take a while...",
      ffmpegError: "❌ FFmpeg failed to load. Check the public/ffmpeg folder.",
      noUpload: "Nothing is uploaded to any server.",
      runsInBrowser: "Runs entirely in the browser.",
    },

    mp4towebm: {
      title: "MP4 → WEBM Converter",
      description: "Select your MP4 video, and DevLab will convert it to WEBM format right in your browser.",
      selectVideo: "📁 Select MP4 video",
      convertBtn: "Convert to WEBM",
      convertingBtn: "Converting...",
      downloadBtn: "Download WEBM File",
      conversionStarted: "Conversion started...",
      startingFFmpeg: "Starting FFmpeg...",
      processingVideo: "Processing video...",
      conversionInProgress: "Conversion in progress...",
      preparingOutput: "Preparing output...",
      conversionCompleted: "✔ Conversion completed!",
      convertNewVideo: "Convert new video",
    },

    mp4tomp3: {
      title: "MP4 → MP3 Converter",
      description: "Extract audio from video.",
      selectVideo: "📁 Select MP4 video",
      convertBtn: "Convert to MP3",
      downloadBtn: "Download MP3",
      audioExtraction: "Audio extraction started...",
      writingFile: "Writing file...",
      processingAudio: "Processing audio...",
      completed: "✔ Audio extraction completed!",
    },

    jpgtowebp: {
      title: "JPG / PNG → WEBP Converter",
      description: "Convert and optimize images to WebP format.",
      selectImage: "📸 Select image (JPG, PNG)",
      convertBtn: "Convert to WEBP",
      downloadBtn: "WEBP Download",
    },

    gifoptimize: {
      title: "GIF Optimize Tool",
      description: "Reduce GIF size, lower FPS, and optimize.",
      selectFile: "📤 Select GIF file",
      optimizeBtn: "Optimize GIF",
      downloadBtn: "Download Optimized GIF",
      completed: "✔ Optimize completed!",
    },

    qrcode: {
      title: "QR Code Generator",
      description: "Enter a link, text, or any content; DevLab will generate a",
      descriptionHighlight: "high-resolution QR code",
      descriptionEnd: "for you. You can download it as a PNG.",
      textUrl: "Text / URL",
      copyText: "Copy Text",
      size: "Size",
      foreground: "Foreground",
      background: "Background",
      downloadBtn: "Download as PNG",
      downloading: "Downloading...",
      createQr: "Create QR code by entering text.",
      previewHint: "Preview • Right click → 'Save image as' to use.",
    },

    formatter: {
      title: "JSON / Lua Formatter",
      description: "Enter your code → select type or detect automatically → Format (beautify / minify).",
      detectAuto: "Detect Automatically",
      beautify: "Beautify",
      minify: "Minify",
      paste: "Paste JSON or Lua code here...",
      updatedCode: "Updated Code",
    },

    jsbeautify: {
      title: "JavaScript Beautify & Minify",
      description: "Improve JavaScript code readability or",
      descriptionHighlight: "minify",
      descriptionEnd: "to reduce file size.",
      inputPlaceholder: "// Paste JS code here",
      outputPlaceholder: "// Output will appear here",
    },

    cssglow: {
      title: "CSS Glow / Orb Generator",
      description1: "Design orb/glow backgrounds here,",
      description2: "or",
      description3: "code with a single click.",
      preview: "Preview",
      previewTitle: "DevLab Style Glow",
      previewDesc: "You can think of this area as a hero, tool page, or landing background. Glow settings determine the mood of the page.",
      tailwindSnippet: "Tailwind Snippet",
      cssSnippet: "CSS Snippet",
      primaryGlow: "Primary Glow",
      secondaryGlow: "Secondary Glow",
      color: "Color",
      opacity: "Opacity",
      size: "Size",
      blur: "Blur",
      position: "Position",
    },

    colorpalette: {
      title: "Color Palette Extractor & Gradient Generator",
      description1: "Upload an image, DevLab will extract the",
      descriptionHighlight: "dominant color palette",
      description2: "extracted. From the color box, you can",
      copyHex: "copy HEX",
      generateGradient: "generate CSS gradient",
      uploadImage: "Click to upload an image",
      uploadHint: "PNG, JPG, WEBP • Medium-sized images recommended",
      extractingColors: "🎨 Extracting colors...",
      noImageYet: "No image uploaded yet. Once you select an image, the dominant palette will appear here.",
      palette: "Palette",
      colorsFound: "colors found",
      waitingForColors: "Waiting for colors",
      uploadToExtract: "Upload an image to extract the color palette.",
      generatedGradient: "Generated Gradient",
      copyCss: "📋 Copy CSS",
      linear: "⬆️ Linear",
      radial: "🔵 Radial",
    },

    imagegenerator: {
      title: "AI Image Generator",
      description: "Describe anything. DevLab uses powerful AI to generate an image for you.",
      placeholder: "A futuristic neon cyberpunk city at night...",
      generateBtn: "Generate Image",
      generating: "Generating...",
      noImageYet: "No image yet — enter a prompt above.",
    },

    mp3downloader: {
      title: "🎧 MP3 Downloader",
      description: "Enter a YouTube, Twitter, TikTok, or Instagram link and download the audio.",
      descriptionHighlight: "Nothing is stored on the server.",
      placeholder: "https://www.youtube.com/watch?v=...",
      downloadBtn: "📥 Download as MP3",
      downloading: "🎧 Downloading...",
      conversionStarted: "🎵 Conversion started...",
      preparingDownload: "📥 Preparing download...",
      success: "✔ Success! MP3 downloaded.",
      supportedPlatforms: "Supported: YouTube, Twitter, TikTok, Instagram, SoundCloud",
    },

    // Common tool strings
    common2: {
      copy: "Copy",
      copied: "Copied!",
      clear: "Clear",
      download: "Download",
    },

    // Phase 1 Tools
    base64: {
      title: "Base64 Encoder/Decoder",
      encode: "Encode",
      decode: "Decode",
      encodeBtn: "Encode to Base64",
      decodeBtn: "Decode from Base64",
      inputPlaceholder: "Enter text to encode...",
      base64Placeholder: "Enter Base64 to decode...",
      output: "Output",
    },

    urlencoder: {
      title: "URL Encoder/Decoder",
      encode: "Encode",
      decode: "Decode",
      encodeBtn: "Encode URL",
      decodeBtn: "Decode URL",
      placeholder: "Enter URL or text...",
      output: "Output",
    },

    uuid: {
      title: "UUID Generator",
      description: "Generate random UUID v4 identifiers.",
      count: "Count:",
      generateBtn: "Generate UUID",
      generated: "Generated UUIDs",
      copyAll: "Copy All",
    },

    hash: {
      title: "Hash Generator",
      placeholder: "Enter text to hash...",
      generateBtn: "Generate Hashes",
    },

    regex: {
      title: "Regex Tester",
      patternPlaceholder: "Enter regex pattern",
      testPlaceholder: "Enter test string...",
      matches: "Matches",
      invalidPattern: "Invalid regex pattern",
    },

    cssminify: {
      title: "CSS Minifier",
      placeholder: "Paste your CSS code here...",
      minifyBtn: "Minify CSS",
      output: "Minified CSS",
    },

    htmlbeautify: {
      title: "HTML Beautify",
      indentSize: "Indent Size:",
      placeholder: "Paste your HTML code here...",
      beautifyBtn: "Beautify HTML",
      output: "Formatted HTML",
    },

    markdown: {
      title: "Markdown Preview",
      editor: "Markdown Editor",
      preview: "Preview",
      placeholder: "Write your markdown here...",
      copyHtml: "Copy HTML",
    },

    // Phase 2 - Image Tools
    imageresizer: {
      title: "Image Resizer",
      upload: "Click or drag to upload an image",
      original: "Original",
      width: "Width (px)",
      height: "Height (px)",
      maintainRatio: "Maintain aspect ratio",
      resizeBtn: "Resize Image",
      newImage: "Upload New Image",
    },

    imagecropper: {
      title: "Image Cropper",
      upload: "Click or drag to upload an image",
      cropBtn: "Crop Image",
      preview: "Cropped Preview",
      newImage: "Upload New Image",
    },

    imagecompressor: {
      title: "Image Compressor",
      upload: "Click or drag to upload an image",
      original: "Original Size",
      quality: "Quality",
      smaller: "Smaller file",
      better: "Better quality",
      compressBtn: "Compress Image",
      before: "Before",
      after: "After",
      saved: "saved",
      newImage: "Upload New Image",
    },

    svgtopng: {
      title: "SVG to PNG",
      upload: "Click or drag to upload an SVG file",
      originalSize: "Original Size",
      scale: "Output Scale",
      outputSize: "Output Size",
      convertBtn: "Convert to PNG",
      preview: "PNG Preview",
      newSvg: "Upload New SVG",
    },

    // Phase 3 - Video Tools
    videotrimmer: {
      title: "Video Trimmer",
      upload: "Click or drag to upload a video",
      trimming: "Trimming video...",
      success: "Video trimmed successfully!",
      start: "Start",
      end: "End",
      startTime: "Start Time",
      endTime: "End Time",
      duration: "Duration",
      trimBtn: "Trim Video",
      downloadTitle: "Download Trimmed Video",
    },

    videotogif: {
      title: "Video to GIF",
      upload: "Click or drag to upload a video",
      converting: "Converting to GIF...",
      success: "GIF created successfully!",
      fps: "FPS",
      width: "Width",
      convertBtn: "Convert to GIF",
      downloadTitle: "Download GIF",
    },

    // Phase 4 - AI Tools
    backgroundremover: {
      title: "Background Remover",
      upload: "Click or drag to upload an image",
      original: "Original Image",
      result: "Result",
      processing: "Removing background...",
      waiting: "Processed image will appear here",
      removeBtn: "Remove Background",
      newImage: "Upload New Image",
    },

    imagetotext: {
      title: "Image to Text (OCR)",
      upload: "Click or drag to upload an image",
      language: "Language",
      extractBtn: "Extract Text",
      extractedText: "Extracted Text",
      placeholder: "The extracted text will appear here...",
      recognizing: "Recognizing text...",
      success: "Text extracted successfully!",
      newImage: "Upload New Image",
    },
  },

  // Page headers (hero sections)
  pageHeaders: {
    mp4towebm: {
      title: "MP4 → WEBM Converter",
      desc1: "Upload your MP4 and DevLab will produce an optimized WEBM.",
      desc2: "Fast conversion — entirely in your browser.",
    },
    mp4tomp3: {
      title: "MP4 → MP3 Converter",
      desc1: "Select your video and DevLab will convert it to MP3 in your browser.",
      desc2: "No data is uploaded — processing happens on your device.",
    },
    jpgtowebp: {
      title: "JPG → WEBP Converter",
      desc1: "Convert and optimize your images to WebP format.",
      desc2: "Fast conversion — entirely in your browser.",
    },
    gifoptimize: {
      title: "GIF Optimization",
      desc1: "Reduce GIF file size, lower FPS, and optimize.",
      desc2: "Fast conversion — entirely in your browser.",
    },
    qrcode: {
      title: "QR Code Generator",
      desc1: "Create customizable QR codes like in DevLab.",
      desc2: "Encode text, URLs, WiFi info, and more. Adjust color, size, and error correction level.",
      desc3: "Download as PNG or share directly.",
    },
    formatter: {
      title: "JSON / Lua Formatter",
      desc1: "Beautify or minify your JSON and Lua code.",
      desc2: "Fast formatting — entirely in your browser.",
    },
    jsbeautify: {
      title: "JavaScript Beautify & Minify",
      desc1: "Improve JavaScript code readability or minify to reduce file size.",
      desc2: "Fast formatting — entirely in your browser.",
    },
    cssglow: {
      title: "CSS Glow / Orb Generator",
      desc1: "Design beautiful glow and orb backgrounds.",
      desc2: "Get Tailwind or CSS code with a single click.",
    },
    colorpalette: {
      title: "Color Palette Extractor",
      desc1: "Upload an image and extract the dominant color palette.",
      desc2: "Generate CSS gradients from your extracted colors.",
    },
    imagegenerator: {
      title: "AI Image Generator",
      desc1: "Describe anything and generate unique images with AI.",
      desc2: "Powered by advanced machine learning models.",
    },
    mp3downloader: {
      title: "MP3 Downloader",
      desc1: "Enter a URL from YouTube, Twitter, TikTok, or other platforms.",
      desc2: "Download audio as MP3 — fast and free.",
    },
    base64: {
      title: "Base64 Encoder/Decoder",
      desc: "Encode text to Base64 or decode Base64 to text. Works entirely in your browser.",
    },
    urlencoder: {
      title: "URL Encoder/Decoder",
      desc: "Encode or decode URL strings with special characters.",
    },
    uuid: {
      title: "UUID Generator",
      desc: "Generate random UUID v4 identifiers for your applications.",
    },
    hash: {
      title: "Hash Generator",
      desc: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text.",
    },
    regex: {
      title: "Regex Tester",
      desc: "Test regular expressions with live highlighting and match details.",
    },
    cssminify: {
      title: "CSS Minifier",
      desc: "Minify your CSS code to reduce file size and improve performance.",
    },
    htmlbeautify: {
      title: "HTML Beautify",
      desc: "Format and indent messy HTML code for better readability.",
    },
    markdown: {
      title: "Markdown Preview",
      desc: "Write markdown and see the live preview side by side.",
    },
    // Phase 2 - Image Tools
    imageresizer: {
      title: "Image Resizer",
      desc: "Resize images to any dimension while maintaining aspect ratio.",
    },
    imagecropper: {
      title: "Image Cropper",
      desc: "Crop images with preset aspect ratios or custom dimensions.",
    },
    imagecompressor: {
      title: "Image Compressor",
      desc: "Compress images to reduce file size for web optimization.",
    },
    svgtopng: {
      title: "SVG to PNG",
      desc: "Convert SVG files to PNG with 1x, 2x, 3x, or 4x scaling.",
    },
    // Phase 3 - Video Tools
    videotrimmer: {
      title: "Video Trimmer",
      desc: "Trim video files without re-encoding (copy mode) for maximum speed.",
    },
    videotogif: {
      title: "Video to GIF",
      desc: "Convert MP4/WebM videos to animated GIFs with adjustable FPS and size.",
    },
    // Phase 4 - AI Tools
    backgroundremover: {
      title: "Background Remover",
      desc: "Remove background from images automatically using AI directly in your browser.",
    },
    imagetotext: {
      title: "Image to Text (OCR)",
      desc: "Extract text from images supporting multiple languages using Tesseract OCR.",
    },
  },
};
