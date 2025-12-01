import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";

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
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${poppins.className}`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
        <div className="pointer-events-none absolute -top-32 -left-28 w-[400px] h-[400px] bg-[rgba(0,255,200,0.10)] blur-[180px] rounded-full animate-pulse" />
        <div className="pointer-events-none absolute bottom-[-50px] right-[-40px] w-[350px] h-[350px] bg-[rgba(0,150,255,0.10)] blur-[200px] rounded-full animate-pulse" />
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  );
}
