# ReviewGenie 🧞‍♂️

> AIがレビュー返信を自動生成。レビュー返信作業を90%削減。

楽天・Amazon・Shopifyのレビューを貼り付けるだけで、AIが最適な返信文を瞬時に作成するSaaSツール。

## 🚀 特徴

- **簡単操作**: レビューを貼り付けてボタンを押すだけ
- **高品質な返信**: GPT-4ベースのAIが自然な敬語で返信を生成
- **時間節約**: 1件5分 → 30秒に短縮、月100件で8時間以上節約
- **カスタマイズ**: 丁寧/フレンドリー/お詫びなどトーン選択可能

## 💰 料金プラン

| プラン | 月額 | 件数 | 機能 |
|--------|------|------|------|
| **Free** | ¥0 | 10件/月 | 基本機能 |
| **Pro** | ¥3,000 | 100件/月 | カスタムテンプレート、履歴管理 |
| **Business** | ¥9,800 | 無制限 | API連携、チーム管理 |

**月100万円達成**: Pro × 100人 + Business × 70人 = ¥1,006,000/月

## 🛠 技術スタック

- **Frontend**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase
- **Payment**: Stripe
- **AI**: OpenAI GPT-4
- **Deployment**: Vercel

## 📁 プロジェクト構成

```
src/
├── app/
│   ├── page.tsx              # ランディングページ
│   ├── signup/page.tsx       # サインアップ
│   ├── dashboard/page.tsx    # ダッシュボード
│   ├── pricing/page.tsx      # 料金ページ
│   └── api/
│       ├── checkout/route.ts # Stripe決済
│       └── generate/route.ts # AI返信生成
└── components/               # 共通コンポーネント
```

## 🚀 開発

```bash
# 依存関係インストール
npm install

# 環境変数設定
cp .env.example .env.local
# STRIPE_SECRET_KEY, OPENAI_API_KEY 等を設定

# 開発サーバー起動
npm run dev

# ビルド
npm run build
```

## 環境変数

```env
# Stripe
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...

# OpenAI
OPENAI_API_KEY=sk-...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 👥 開発チーム

4体のAIエージェントが協力して開発:

- **Kai** ⚡ - OpenAI連携、レビュー生成ロジック
- **Axa** 🔧 - フロントエンドUI
- **ビスク** 🦞 - Stripe決済、バックエンドAPI
- **IKKU** 🔍 - ダッシュボード、履歴管理

## 📄 ライセンス

MIT

---

*このプロジェクトはAI Avengers（Kai, Axa, ビスク, IKKU）が協力して開発しました。*
