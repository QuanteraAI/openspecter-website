import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenSpecter | Open-source legal AI for everyone",
  description:
    "Open-source legal AI tools that rival enterprise solutions like Harvey and Legora. Document analysis, legal research, contract review, all free, self-hosted, and accessible to every lawyer.",
  openGraph: {
    title: "OpenSpecter | Open-source legal AI for everyone",
    description:
      "Open-source legal AI tools that rival enterprise solutions. Free, self-hosted, and accessible.",
    url: "https://openspecter.ai",
    siteName: "OpenSpecter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenSpecter | Open-source legal AI for everyone",
    description:
      "Open-source legal AI tools that rival enterprise solutions. Free, self-hosted, and accessible.",
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
