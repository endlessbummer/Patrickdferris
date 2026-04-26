import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patrick D. Ferris — Author",
  description:
    "Official website of Patrick D. Ferris — multi-genre fiction author based in Fort St. John, B.C., Canada. Creator of the Terry Reid cycle, Gray Sides at Dawn, Time Sleuths, and the Gypsies series.",
  openGraph: {
    title: "Patrick D. Ferris — Author",
    description:
      "Multi-genre fiction author based in Fort St. John, B.C., Canada.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
