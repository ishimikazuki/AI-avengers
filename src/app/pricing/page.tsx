import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const plans = [
  {
    name: 'Starter',
    price: '¥50,000',
    period: '/月',
    description: '小規模EC事業者向け。基本機能をすべて利用可能。',
    features: [
      'レビュー自動返信（月500件まで）',
      '在庫アラート（10商品まで）',
      '週次レポート自動生成',
      '1ECサイト連携',
      'メールサポート',
      'APIアクセス',
    ],
    cta: '無料トライアル開始',
    popular: false,
    href: '/dashboard',
  },
  {
    name: 'Pro',
    price: '¥150,000',
    period: '/月',
    description: '成長中のEC事業者向け。複数モールを効率的に運営。',
    features: [
      'レビュー自動返信（無制限）',
      '在庫アラート（100商品まで）',
      '日次レポート自動生成',
      '5ECサイト連携',
      '売上予測機能',
      'チャットサポート',
      '専用AIエージェント',
      'カスタムワークフロー',
    ],
    cta: '無料トライアル開始',
    popular: true,
    href: '/dashboard',
  },
  {
    name: 'Enterprise',
    price: 'カスタム',
    period: '',
    description: '大規模EC事業者向け。専任サポートと無制限機能。',
    features: [
      'すべての機能が無制限',
      '無制限ECサイト連携',
      'リアルタイムレポート',
      '専任カスタマーサクセス',
      'SLA保証（99.9%）',
      'オンプレミス対応可',
      'カスタムAIトレーニング',
      '24時間電話サポート',
    ],
    cta: 'お問い合わせ',
    popular: false,
    href: '#',
  },
];

const faqs = [
  {
    q: '無料トライアル中に課金されますか？',
    a: 'いいえ、14日間の無料トライアル中は一切課金されません。トライアル終了前にメールでお知らせします。',
  },
  {
    q: 'プランの変更はいつでもできますか？',
    a: 'はい、いつでもアップグレード・ダウングレードが可能です。差額は日割り計算されます。',
  },
  {
    q: 'どのECプラットフォームに対応していますか？',
    a: 'Amazon、楽天市場、Yahoo!ショッピング、Shopify、BASE、STORESなど主要プラットフォームに対応しています。',
  },
  {
    q: '導入にどのくらい時間がかかりますか？',
    a: 'アカウント作成から連携完了まで、最短5分で完了します。複雑な設定は不要です。',
  },
  {
    q: '解約はいつでもできますか？',
    a: 'はい、いつでも解約可能です。解約後も契約期間終了まではサービスをご利用いただけます。',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            シンプルな<span className="gradient-text">料金プラン</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ビジネスの規模に合わせて選べる3つのプラン。
            すべてのプランで14日間の無料トライアルが可能です。
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-2 border-indigo-600 shadow-xl scale-105'
                    : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    人気No.1
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full py-3 rounded-xl text-center font-semibold transition ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            プラン比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">機能</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-indigo-600">Pro</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['レビュー自動返信', '500件/月', '無制限', '無制限'],
                  ['在庫アラート', '10商品', '100商品', '無制限'],
                  ['ECサイト連携数', '1', '5', '無制限'],
                  ['レポート頻度', '週次', '日次', 'リアルタイム'],
                  ['売上予測', '×', '○', '○'],
                  ['カスタムワークフロー', '×', '○', '○'],
                  ['専任サポート', '×', '×', '○'],
                  ['SLA保証', '×', '×', '99.9%'],
                ].map(([feature, starter, pro, enterprise]) => (
                  <tr key={feature} className="border-b last:border-0">
                    <td className="py-4 px-6 text-gray-700">{feature}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{starter}</td>
                    <td className="py-4 px-6 text-center text-indigo-600 font-medium">{pro}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            よくある質問
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            まずは無料でお試しください
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            14日間のトライアルで、AI Crewがあなたのビジネスにどう役立つかをご体験ください。
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            無料トライアルを始める →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
