import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Crew - EC事業者向けAIエージェント自動化プラットフォーム",
  description: "レビュー自動返信、在庫アラート、レポート自動生成。EC運営を全自動化するAIプラットフォーム。",
  keywords: ["EC", "AI", "自動化", "レビュー返信", "在庫管理", "eコマース", "Amazon", "楽天"],
  openGraph: {
    title: "AI Crew - EC事業者向けAIエージェント自動化プラットフォーム",
    description: "レビュー自動返信、在庫アラート、レポート自動生成。EC運営を全自動化するAIプラットフォーム。",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
