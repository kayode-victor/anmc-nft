import Head from "next/head";
import "./globals.css";

import { Fira_Sans_Condensed } from "next/font/google";

const firaSansCondensed = Fira_Sans_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fira-sans-condensed",
});

export const metadata = {
  title: "ANMC | Africa NFT  & Metaverse Conference",
  description:
    "Unlocking Africa's Digital Future : showcasing Creativity. Made by Africa. For Africa",
  keywords: [
    "Pepperlyl",
    "NFT Marketplace",
    "Metaverse",
    "Web3",
    "Gaming",
    "Digital Art",
    "NFT Artists",
    "Art Collectors",
    "Game Developers",
  ],
  favicon: "./favicon.ico", // Replace with the actual path to your favicon
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <link rel="icon" href={metadata.favicon} />
      </Head>
      <body className={`${firaSansCondensed.variable}`}>{children}</body>
    </html>
  );
}
