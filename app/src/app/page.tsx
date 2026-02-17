'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Review<span className="text-emerald-400">Genie</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/pricing" className="text-gray-300 hover:text-white transition">
              料金
            </Link>
            <Link
              href="/dashboard"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-500 transition"
            >
              ログイン
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          レビュー返信を
          <span className="text-emerald-400">AIで自動化</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          楽天・Amazon・Shopifyのレビューに、AIが最適な返信を自動生成。
          年間1,000時間の作業時間を削減し、顧客満足度を向上させます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pricing"
            className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-500 transition"
          >
            無料で始める
          </Link>
          <Link
            href="#demo"
            className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
          >
            デモを見る
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="text-4xl font-bold text-emerald-400 mb-2">1,000+</div>
            <div className="text-gray-400">導入店舗数</div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="text-4xl font-bold text-emerald-400 mb-2">50万件</div>
            <div className="text-gray-400">生成したレビュー返信</div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
            <div className="text-gray-400">顧客満足度</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          ReviewGenieの特徴
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">ワンクリック生成</h3>
            <p className="text-gray-400">
              レビューを貼り付けるだけで、AIが最適な返信を即座に生成。コピー&ペーストですぐ使えます。
            </p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">トーン調整</h3>
            <p className="text-gray-400">
              丁寧・カジュアル・フォーマルなど、ブランドに合わせたトーンで返信を生成できます。
            </p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">分析ダッシュボード</h3>
            <p className="text-gray-400">
              レビューの傾向分析、返信率の追跡、改善提案を一目で確認できます。
            </p>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          実際に試してみよう
        </h2>
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-2xl p-8">
          <label className="block text-gray-300 mb-2">レビューを入力</label>
          <textarea
            className="w-full bg-gray-700 text-white rounded-lg p-4 mb-4 h-32 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            placeholder="お客様のレビューをここに貼り付けてください..."
          />
          <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-500 transition">
            AIで返信を生成
          </button>
          <p className="text-gray-500 text-sm mt-4 text-center">
            無料で10件まで試せます。クレジットカード不要。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-emerald-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            今すぐレビュー対応を自動化しよう
          </h2>
          <p className="text-emerald-100 mb-8">
            14日間の無料トライアル。クレジットカード不要で始められます。
          </p>
          <Link
            href="/pricing"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            無料で始める
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-2xl font-bold text-white mb-4 md:mb-0">
            Review<span className="text-emerald-400">Genie</span>
          </div>
          <div className="flex gap-6 text-gray-400">
            <Link href="/pricing" className="hover:text-white transition">料金</Link>
            <Link href="/terms" className="hover:text-white transition">利用規約</Link>
            <Link href="/privacy" className="hover:text-white transition">プライバシー</Link>
            <Link href="/contact" className="hover:text-white transition">お問い合わせ</Link>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          © 2026 ReviewGenie. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
