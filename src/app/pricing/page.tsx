'use client';

import { useState } from 'react';
import { Sparkles, CheckCircle, ArrowLeft, Loader2 } from 'lucide-react';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    priceId: null,
    description: 'お試しに最適',
    features: [
      '月10件まで',
      '基本テンプレート',
      'メールサポート',
    ],
    cta: '現在のプラン',
    disabled: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 3000,
    priceId: 'price_pro_monthly', // Stripe Price ID
    description: '成長中のショップに',
    features: [
      '月100件まで',
      'カスタムテンプレート',
      '優先サポート',
      '履歴管理',
    ],
    cta: 'Proを始める',
    popular: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: 9800,
    priceId: 'price_business_monthly', // Stripe Price ID
    description: '大規模ショップに',
    features: [
      '無制限',
      'API連携',
      '専任サポート',
      'チーム管理',
      'カスタムブランディング',
    ],
    cta: 'Businessを始める',
  },
];

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string | null, planId: string) => {
    if (!priceId) return;
    
    setLoading(planId);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      
      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('決済の開始に失敗しました。もう一度お試しください。');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">ReviewGenie</span>
          </a>
          <a href="/dashboard" className="text-slate-400 hover:text-white flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> ダッシュボードに戻る
          </a>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">料金プラン</h1>
            <p className="text-slate-400 text-lg">
              ビジネスの規模に合わせて最適なプランをお選びください
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 border ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-600 to-purple-700 border-purple-500'
                    : 'bg-slate-800/50 border-slate-700'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                    人気
                  </div>
                )}

                <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
                <div className="mb-1">
                  <span className="text-4xl font-bold text-white">
                    ¥{plan.price.toLocaleString()}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-purple-200' : 'text-slate-400'}`}>
                    /月
                  </span>
                </div>
                <p className={`mb-6 ${plan.popular ? 'text-purple-200' : 'text-slate-400'}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className={`w-5 h-5 ${plan.popular ? 'text-purple-200' : 'text-green-400'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-slate-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan.priceId, plan.id)}
                  disabled={plan.disabled || loading === plan.id}
                  className={`w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                    plan.disabled
                      ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                      : plan.popular
                      ? 'bg-white hover:bg-purple-50 text-purple-600'
                      : 'bg-purple-500 hover:bg-purple-600 text-white'
                  }`}
                >
                  {loading === plan.id ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      処理中...
                    </>
                  ) : (
                    plan.cta
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">よくある質問</h2>
            <div className="space-y-4">
              {[
                {
                  q: '無料プランはいつまで使えますか？',
                  a: '無料プランは永久に無料です。月10件まで、クレジットカード登録なしでご利用いただけます。',
                },
                {
                  q: 'いつでもプラン変更できますか？',
                  a: 'はい、いつでもアップグレード・ダウングレードが可能です。アップグレードは即時反映、ダウングレードは次回更新日から適用されます。',
                },
                {
                  q: '解約はいつでもできますか？',
                  a: 'はい、いつでも解約可能です。解約後も契約期間の終了まではサービスをご利用いただけます。',
                },
                {
                  q: '領収書は発行されますか？',
                  a: 'はい、毎月の決済完了後に自動でメールで送付されます。また、ダッシュボードからもダウンロード可能です。',
                },
                {
                  q: 'どの決済方法が使えますか？',
                  a: 'クレジットカード（Visa、Mastercard、American Express、JCB）をご利用いただけます。',
                },
              ].map((faq, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-white font-medium mb-2">{faq.q}</h3>
                  <p className="text-slate-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          <p>© 2026 ReviewGenie. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="/terms" className="hover:text-white">利用規約</a>
            <a href="/privacy" className="hover:text-white">プライバシー</a>
            <a href="/tokushoho" className="hover:text-white">特定商取引法</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
