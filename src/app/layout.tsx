import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewGenie - AIがレビュー返信を自動生成",
  description: "楽天・Amazon・Shopifyのレビューに最適な返信をAIが自動生成。返信作業を90%削減。",
  keywords: "レビュー返信, AI, 楽天, Amazon, Shopify, EC, 自動化",
  openGraph: {
    title: "ReviewGenie - AIがレビュー返信を自動生成",
    description: "レビュー返信作業を90%削減するAIツール",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
