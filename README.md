# AI Crew 🚀

EC事業者向けAIエージェント自動化プラットフォーム

## 概要

AI Crewは、EC事業者のための次世代AIプラットフォームです。レビュー返信、在庫管理、レポート作成をAIが自動化し、月100万円の人件費削減と売上最大化を実現します。

## 主な機能

- 💬 **レビュー自動返信** - AIがカスタマーレビューを分析し、適切な返信を自動生成
- 📦 **在庫アラート** - 在庫状況をリアルタイム監視、閾値を下回ると自動通知
- 📊 **レポート自動生成** - 売上・アクセス・広告効果を自動分析
- 🔗 **マルチプラットフォーム** - Amazon、楽天、Yahoo!ショッピング、Shopifyなどに対応
- 🤖 **AIエージェント** - 複数のAIエージェントが連携して作業を自動化
- 📈 **売上予測** - 過去データとトレンドから売上を予測

## 料金プラン

| プラン | 月額料金 | 対象 |
|--------|----------|------|
| Starter | ¥50,000 | 小規模EC事業者 |
| Pro | ¥150,000 | 成長中のEC事業者 |
| Enterprise | カスタム | 大規模EC事業者 |

すべてのプランで14日間の無料トライアルが可能です。

## 技術スタック

- **フロントエンド**: Next.js 15 + TypeScript + Tailwind CSS
- **バックエンド**: Supabase (認証・データベース・ストレージ)
- **デプロイ**: Vercel

## セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/ishimikazuki/AI-avengers.git
cd AI-avengers

# 依存関係をインストール
npm install

# 環境変数を設定
cp .env.example .env.local
# .env.localにSupabaseの認証情報を設定

# 開発サーバーを起動
npm run dev
```

http://localhost:3000 でアプリケーションにアクセスできます。

## プロジェクト構成

```
src/
├── app/
│   ├── page.tsx          # ランディングページ
│   ├── pricing/
│   │   └── page.tsx      # 料金ページ
│   ├── dashboard/
│   │   └── page.tsx      # ダッシュボード
│   ├── layout.tsx        # レイアウト
│   └── globals.css       # グローバルスタイル
└── components/
    ├── Header.tsx        # ヘッダー
    └── Footer.tsx        # フッター
```

## 環境変数

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## ライセンス

MIT License

## お問い合わせ

ご質問やフィードバックは、Issueまたはプルリクエストでお願いします。
