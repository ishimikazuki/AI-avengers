# ReviewGenie 🧞‍♂️

AIでEC店舗のレビュー返信を自動化するSaaSプラットフォーム

## 🚀 機能

- **AIレビュー返信生成**: レビューを入力するとAIが最適な返信を自動生成
- **トーン調整**: 丁寧・カジュアル・フォーマル・フレンドリーから選択
- **ワンクリックコピー**: 生成した返信をすぐにコピー＆ペースト
- **履歴管理**: 過去の返信履歴を確認
- **Stripe決済**: サブスクリプション課金に対応

## 💰 料金プラン

| プラン | 月額 | 内容 |
|--------|------|------|
| Free | ¥0 | 月10件まで |
| Pro | ¥3,000 | 月100件、トーン調整、API |
| Business | ¥9,800 | 無制限、チーム機能、優先サポート |

## 🛠 技術スタック

- **フロントエンド**: Next.js 16 + TypeScript + Tailwind CSS
- **バックエンド**: Next.js API Routes
- **AI**: OpenAI GPT-4o-mini
- **決済**: Stripe
- **認証**: Supabase Auth (予定)
- **データベース**: Supabase (予定)

## 📦 インストール

```bash
cd app
npm install
```

## 🔧 環境変数

`.env.local` を作成:

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
STRIPE_PRICE_PRO=price_xxx
STRIPE_PRICE_BUSINESS=price_xxx

# OpenAI
OPENAI_API_KEY=sk-xxx

# App
NEXT_PUBLIC_URL=http://localhost:3000
```

## 🚀 開発サーバー起動

```bash
npm run dev
```

http://localhost:3000 でアクセス

## 📁 ディレクトリ構成

```
app/
├── src/
│   └── app/
│       ├── api/
│       │   ├── generate/      # AI返信生成API
│       │   └── stripe/        # Stripe決済API
│       ├── dashboard/         # ダッシュボード
│       ├── pricing/           # 料金ページ
│       ├── login/             # ログイン
│       ├── signup/            # サインアップ
│       ├── success/           # 決済成功
│       └── page.tsx           # ランディングページ
├── package.json
└── ...
```

## 👥 チーム

- **Kai** ⚡ - Stripe決済、OpenAI連携
- **Axa** 🔧 - フロントエンドUI
- **ビスク** 🦞 - バックエンドAPI
- **IKKU** 🔍 - コンテンツ、SEO

## 📄 ライセンス

MIT

---

Made with ❤️ by AI Crew
