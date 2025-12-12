import { NextResponse } from "next/server";
import { downloadMP3 } from "@/lib/mp3downloader"; // Yolunuzu kontrol edin

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");

    if (!url) {
      return NextResponse.json(
        { error: "❗ YouTube linki gereklidir." },
        { status: 400 }
      );
    }

    // Yeni downloadMP3 fonksiyonu burayı sorunsuz çalıştıracaktır
    const { buffer, fileName } = await downloadMP3(url);

    return NextResponse.json({
      success: true,
      fileName,
      fileData: buffer.toString("base64"),
    });

  } catch (err: any) {
    console.error("MP3 API Hatası:", err);
    return NextResponse.json(
      { error: "🚨 Dönüştürme hatası: " + (err?.message || "Bilinmeyen bir hata oluştu") },
      { status: 500 }
    );
  }
}