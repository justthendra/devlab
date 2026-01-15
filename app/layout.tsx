import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "DevLab",
  description: "DevLab is a service that offers you many tools to make your work easier and it is completely free to use..",
  favicon: "./favicon.ico",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col ${poppins.className}`} suppressHydrationWarning={true}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            {/* Top Left Glow */}
            <div className="pointer-events-none absolute -top-40 -left-20 w-[500px] h-[500px] bg-[rgba(0,255,200,0.08)] blur-[120px] rounded-full mix-blend-screen opacity-50 animate-pulse" />

            {/* Bottom Right Glow (fixed position to ensure it stays in corner) */}
            <div className="pointer-events-none fixed bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[rgba(120,50,255,0.15)] blur-[150px] rounded-full mix-blend-screen opacity-50 animate-pulse z-0" />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

