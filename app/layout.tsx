import type { Metadata } from "next";
import { fontSans, fontHeading } from "@/lib/fonts";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Amigosia | Scalable Digital Products",
  description: "From government-scale platforms to hyperlocal marketplaces to our own AI-native developer tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <LenisProvider>
          <Navbar />
          <main className="flex-1 flex flex-col min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
