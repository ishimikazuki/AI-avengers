import { Sparkles, ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-900">
      <header className="border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">ReviewGenie</span>
          </a>
          <a href="/" className="text-slate-400 hover:text-white flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> 戻る
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">プライバシーポリシー</h1>
        
        <div className="space-y-8 text-slate-300">
          <p>ReviewGenie（以下「当サービス」）は、お客様の個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。</p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. 収集する情報</h2>
            <p>当サービスは、以下の情報を収集します：</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>メールアドレス</li>
              <li>パスワード（暗号化して保存）</li>
              <li>ショップ名</li>
              <li>利用プラットフォーム情報</li>
              <li>サービス利用履歴</li>
              <li>決済情報（Stripeを通じて処理、当サービスでは保存しません）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. 情報の利用目的</h2>
            <p>収集した情報は、以下の目的で利用します：</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>サービスの提供・運営</li>
              <li>ユーザー認証</li>
              <li>カスタマーサポート</li>
              <li>サービス改善</li>
              <li>重要なお知らせの送信</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. 情報の第三者提供</h2>
            <p>当サービスは、以下の場合を除き、お客様の個人情報を第三者に提供しません：</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>サービス提供に必要な外部サービス（Stripe、Supabase等）への提供</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. 情報の安全管理</h2>
            <p>当サービスは、個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を講じます。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Cookieの使用</h2>
            <p>当サービスは、ユーザー体験向上のためCookieを使用します。ブラウザ設定でCookieを無効にすることも可能ですが、一部機能が制限される場合があります。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. お問い合わせ</h2>
            <p>プライバシーに関するお問い合わせは、support@reviewgenie.jp までご連絡ください。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. 改定</h2>
            <p>当ポリシーは、必要に応じて改定されることがあります。重要な変更がある場合は、サービス内またはメールでお知らせします。</p>
          </section>

          <p className="text-slate-500 text-sm mt-8">最終更新日: 2026年2月18日</p>
        </div>
      </main>

      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center text-slate-500 text-sm">
          <p>© 2026 ReviewGenie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
