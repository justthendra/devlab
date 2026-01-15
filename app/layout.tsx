import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import CustomCursor from "../components/CustomCursor";

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
            {/* Top Left Glows */}
            <div className="pointer-events-none absolute -top-40 -left-20 w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] rounded-full mix-blend-screen opacity-40 animate-blob" />
            <div className="pointer-events-none absolute top-20 -left-40 w-[500px] h-[500px] bg-indigo-600/15 blur-[130px] rounded-full mix-blend-screen opacity-50 animate-blob animation-delay-2000" />

            {/* Bottom Right Glows */}
            <div className="pointer-events-none fixed bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-indigo-600/10 blur-[160px] rounded-full mix-blend-screen opacity-50 z-0 animate-blob animation-delay-4000" />
            <div className="pointer-events-none fixed bottom-[50px] right-[-150px] w-[400px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full mix-blend-screen opacity-40 z-0 animate-blob" />
            <Navbar />
            <CustomCursor />
            {children}
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

