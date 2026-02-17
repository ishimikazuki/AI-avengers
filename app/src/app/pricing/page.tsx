'use client';

import { useState } from 'react';

const plans = [
  {
    name: 'Free',
    price: '¥0',
    priceId: null,
    features: [
      '月10件までのレビュー返信',
      '基本テンプレート',
      'メールサポート',
    ],
    cta: '無料で始める',
    popular: false,
  },
  {
    name: 'Pro',
    price: '¥3,000',
    priceId: 'pro',
    features: [
      '月100件までのレビュー返信',
      'カスタムテンプレート',
      'トーン調整機能',
      '優先サポート',
      'API アクセス',
    ],
    cta: 'Pro を始める',
    popular: true,
  },
  {
    name: 'Business',
    price: '¥9,800',
    priceId: 'business',
    features: [
      '無制限のレビュー返信',
      '全テンプレート利用可能',
      'チーム機能（5名まで）',
      '専用サポート',
      'カスタムAI調整',
      '分析ダッシュボード',
    ],
    cta: 'Business を始める',
    popular: false,
  },
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (priceId: string | null) => {
    if (!priceId) {
      window.location.href = '/signup';
      return;
    }

    setLoading(priceId);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, email: '' }),
      });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            シンプルな料金プラン
          </h1>
          <p className="text-xl text-gray-400">
            あなたのビジネスに合ったプランを選んでください
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-emerald-600 ring-4 ring-emerald-400'
                  : 'bg-gray-800'
              }`}
            >
              {plan.popular && (
                <span className="bg-emerald-400 text-emerald-900 text-sm font-semibold px-3 py-1 rounded-full">
                  人気No.1
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mt-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-white mt-4">
                {plan.price}
                <span className="text-lg font-normal text-gray-300">/月</span>
              </p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-200">
                    <svg
                      className="w-5 h-5 mr-3 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleCheckout(plan.priceId)}
                disabled={loading === plan.priceId}
                className={`w-full mt-8 py-3 px-6 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-white text-emerald-600 hover:bg-gray-100'
                    : 'bg-emerald-600 text-white hover:bg-emerald-500'
                } disabled:opacity-50`}
              >
                {loading === plan.priceId ? '処理中...' : plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-400">
          <p>全プラン14日間の無料トライアル付き。いつでもキャンセル可能。</p>
        </div>
      </div>
    </div>
  );
}
