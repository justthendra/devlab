import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  const apiKey = process.env.RAPIDAPI_KEY;
  
  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured. Please add RAPIDAPI_KEY to .env.local" },
      { status: 500 }
    );
  }

  try {
    // Extract video ID from YouTube URL
    const videoIdMatch = url.match(/(?:v=|\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (!videoIdMatch) {
      return NextResponse.json(
        { error: "Invalid YouTube URL. Please provide a valid YouTube video link." },
        { status: 400 }
      );
    }
    const videoId = videoIdMatch[1];

    // RapidAPI YouTube MP3 endpoint
    const response = await fetch(
      `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("RapidAPI error:", errorText);
      return NextResponse.json(
        { error: "Failed to process video. Please try again." },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (data.status !== "ok") {
      return NextResponse.json(
        { error: data.msg || "Failed to convert video" },
        { status: 400 }
      );
    }

    // Return the download link directly (client will handle download)
    return NextResponse.json({
      downloadUrl: data.link,
      fileName: `${data.title || "download"}.mp3`,
      title: data.title,
      status: "success",
    });
  } catch (error: any) {
    console.error("MP3 download error:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
