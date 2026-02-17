import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white mb-8 block">
          Review<span className="text-emerald-400">Genie</span>
        </Link>
        
        <h1 className="text-3xl font-bold text-white mb-8">プライバシーポリシー</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">1. 収集する情報</h2>
            <p className="text-gray-400">
              当社は、サービス提供のために以下の情報を収集します：
            </p>
            <ul className="text-gray-400 list-disc pl-5 space-y-2 mt-2">
              <li>メールアドレス</li>
              <li>お支払い情報（Stripeを通じて処理）</li>
              <li>サービス利用履歴</li>
              <li>入力されたレビュー文章（返信生成のため）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">2. 情報の利用目的</h2>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              <li>サービスの提供・運営</li>
              <li>お支払いの処理</li>
              <li>カスタマーサポート</li>
              <li>サービスの改善・新機能の開発</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">3. 情報の共有</h2>
            <p className="text-gray-400">
              当社は、以下の場合を除き、お客様の個人情報を第三者に提供しません：
            </p>
            <ul className="text-gray-400 list-disc pl-5 space-y-2 mt-2">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>サービス提供に必要な業務委託先（Stripe、OpenAI等）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">4. データの保護</h2>
            <p className="text-gray-400">
              当社は、適切な技術的・組織的措置を講じ、お客様の情報を保護します。
              通信はSSL/TLSで暗号化され、データは安全なサーバーに保管されます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">5. Cookieの使用</h2>
            <p className="text-gray-400">
              当社は、サービスの利便性向上のためにCookieを使用します。
              ブラウザの設定でCookieを無効にすることもできますが、一部の機能が制限される場合があります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">6. お問い合わせ</h2>
            <p className="text-gray-400">
              プライバシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
            </p>
          </section>

          <p className="text-gray-500 mt-8">
            制定日: 2026年2月18日
          </p>
        </div>
      </div>
    </div>
  );
}
