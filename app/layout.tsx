import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Poppins, Great_Vibes } from "next/font/google";
import "./globals.css";
import { weddingData } from "@/data/wedding";
import { ClientProviders } from "@/components/providers/ClientProviders";

const scriptFont = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-script",
});

const headingFont = Cinzel({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

const cursiveFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
});

export const metadata: Metadata = {
  title: `${weddingData.couple.groom.firstName} & ${weddingData.couple.bride.firstName} | Wedding Invitation`,
  description: `You are invited to the wedding of ${weddingData.couple.groom.firstName} and ${weddingData.couple.bride.firstName}.`,
  openGraph: {
    title: `${weddingData.couple.groom.firstName} & ${weddingData.couple.bride.firstName} are getting married!`,
    description: `Join us in celebrating the wedding of ${weddingData.couple.groom.firstName} and ${weddingData.couple.bride.firstName}.`,
    type: "website",
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
      className={`${scriptFont.variable} ${headingFont.variable} ${bodyFont.variable} ${cursiveFont.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-ivory text-charcoal">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
