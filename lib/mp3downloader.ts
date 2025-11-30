import ytdl from "@distube/ytdl-core"; // Yeni kütüphane
import ffmpegPath from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";
import { tmpdir } from "os";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

// ytdl-core'un Promise tabanlı bir sarıcısı (wrapper)
function getCleanTitle(videoUrl: string): Promise<string> {
    return new Promise(async (resolve) => {
        try {
            const videoInfo = await ytdl.getInfo(videoUrl);
            // Başlık karakterlerini temizle: dosya adı için uygun olmayanları kaldır
            const title = videoInfo.videoDetails.title.replace(/[^a-zA-Z0-9-_ ]/g, "").trim() || "video";
            resolve(title);
        } catch (err) {
            console.error("Error getting title:", err);
            resolve("video"); // Başlık alınamazsa varsayılan isim
        }
    });
}

export async function downloadMP3(videoUrl: string) {
    return new Promise<{ buffer: Buffer; fileName: string }>(async (resolve, reject) => {
        try {
            // 1. Başlık alınıyor
            const title = await getCleanTitle(videoUrl);
            const fileName = `${title}_${uuidv4()}.mp3`;
            const outputPath = path.join(tmpdir(), fileName);

            // 2. FFmpeg yolunu ayarla
            if (!ffmpegPath) {
                return reject(new Error("FFmpeg executable not found."));
            }
            ffmpeg.setFfmpegPath(ffmpegPath as string);

            // 3. İndirme akışını başlat (audioonly filtresi ile)
            const audioStream = ytdl(videoUrl, { 
                filter: "audioonly", 
                quality: "highestaudio",
                // @distube/ytdl-core'a özgü, akışın bitmesini engelleyen ayarları kapatır.
                dlChunkSize: 0 
            });

            // 4. FFmpeg ile dönüştürme ve kaydetme
            ffmpeg(audioStream)
                .audioBitrate(128)
                .toFormat("mp3")
                // Başarılı tamamlama
                .on("end", () => {
                    try {
                        const buffer = fs.readFileSync(outputPath);
                        fs.unlinkSync(outputPath); // Geçici dosyayı sil
                        resolve({ buffer, fileName });
                    } catch (readErr) {
                        reject(new Error(`Error reading/deleting downloaded file: ${readErr}`));
                    }
                })
                // Hata oluşumu
                .on("error", (err) => {
                    // Hata durumunda geçici dosyayı temizlemeye çalış
                    if (fs.existsSync(outputPath)) {
                        fs.unlinkSync(outputPath);
                    }
                    reject(new Error(`FFmpeg/error: ${err.message}`));
                })
                .save(outputPath);

        } catch (err) {
            // ytdl.getInfo or other initialization errors
            reject(new Error(`Initialization error: ${err instanceof Error ? err.message : String(err)}`));
        }
    });
}