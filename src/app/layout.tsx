import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenSpecter | Open-source legal AI for everyone",
  description:
    "Open-source legal AI tools that democratize access to enterprise-grade capabilities. Run multi-step workflows, tabular reviews, and document analysis on your own infrastructure, absolutely free.",
  openGraph: {
    title: "OpenSpecter | Open-source legal AI for everyone",
    description:
      "Enterprise-grade document analysis, legal research, and contract review. The fully open-source, free, and self-hosted alternative to Harvey.",
    url: "https://openspecter.com",
    siteName: "OpenSpecter",
    images: [
      {
        url: "https://openspecter.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenSpecter - Open-source legal AI for everyone",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenSpecter | Open-source legal AI for everyone",
    description:
      "Enterprise-grade document analysis, legal research, and contract review. The fully open-source, free, and self-hosted alternative to Harvey.",
    images: ["https://openspecter.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
