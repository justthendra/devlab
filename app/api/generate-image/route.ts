import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt || prompt.length < 3) {
      return NextResponse.json(
        { error: "Prompt is too short." },
        { status: 400 }
      );
    }

    // ---- multipart body hazırlama ----
    const form = new FormData();
    form.append("prompt", prompt);
    form.append("output_format", "png");

    // ---- Stability API İsteği ----
    const response = await fetch(
      "https://api.stability.ai/v2beta/stable-image/generate/sd3",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: "application/json",
        },
        body: form,
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: result?.errors?.join(", ") || "Unknown API error" },
        { status: 500 }
      );
    }

    // Base64 PNG → Blob
    const base64 = result.image;
    const binary = Buffer.from(base64, "base64");

    return new NextResponse(binary, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected server error: " + err },
      { status: 500 }
    );
  }
}
