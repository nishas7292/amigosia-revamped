import type { Metadata } from "next";
import { fontSans, fontHeading } from "@/lib/fonts";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL("https://amigosia.com"),
  title: {
    default: "Amigosia | Scalable Digital Products & AI Solutions",
    template: "%s | Amigosia",
  },
  description:
    "From government-scale platforms to hyperlocal marketplaces to our own AI-native developer tools. Amigosia engineers resilient digital infrastructure and AI solutions.",
  keywords: [
    "Software Engineering",
    "AI Products",
    "DeepLens",
    "DeployMind",
    "Digital Transformation",
    "Kerala Startup",
    "Government Technology Partner",
  ],
  authors: [{ name: "Amigosia", url: "https://amigosia.com" }],
  creator: "Amigosia",
  publisher: "Amigosia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amigosia.com",
    siteName: "Amigosia",
    title: "Amigosia | Scalable Digital Products & AI Solutions",
    description:
      "From government-scale platforms to hyperlocal marketplaces to our own AI-native developer tools.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Amigosia Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amigosia | Scalable Digital Products & AI Solutions",
    description:
      "From government-scale platforms to hyperlocal marketplaces to our own AI-native developer tools.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeading.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans overflow-x-clip">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
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
