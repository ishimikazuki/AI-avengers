'use client';

import { useState } from 'react';
import { Sparkles, Star, Clock, TrendingUp, CheckCircle, ArrowRight, Menu, X, MessageSquare, Zap, Shield } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoReview, setDemoReview] = useState('');
  const [demoReply, setDemoReply] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDemo = async () => {
    if (!demoReview.trim()) return;
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setDemoReply(`お客様、この度は貴重なレビューをいただき、誠にありがとうございます。

${demoReview.includes('良') || demoReview.includes('満足') || demoReview.includes('おすすめ') 
  ? 'ご満足いただけたようで、大変嬉しく思います。' 
  : 'ご意見を真摯に受け止め、サービス向上に努めてまいります。'}

今後ともご愛顧のほど、よろしくお願いいたします。`);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-white">ReviewGenie</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#demo" className="text-slate-300 hover:text-white transition">デモ</a>
              <a href="#features" className="text-slate-300 hover:text-white transition">機能</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition">料金</a>
              <a href="/login" className="text-slate-300 hover:text-white transition">ログイン</a>
              <a href="/signup" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition">
                無料で始める
              </a>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              <a href="#demo" className="block text-slate-300">デモ</a>
              <a href="#features" className="block text-slate-300">機能</a>
              <a href="#pricing" className="block text-slate-300">料金</a>
              <a href="/signup" className="block bg-purple-500 text-white px-4 py-2 rounded-lg text-center">
                無料で始める
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            レビュー返信作業を90%削減
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AIがレビュー返信を<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              自動生成
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            楽天・Amazon・Shopifyのレビューを貼り付けるだけ。<br />
            AIが最適な返信文を瞬時に作成します。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#demo" 
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition flex items-center justify-center gap-2"
            >
              無料でデモを試す <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#pricing" 
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition"
            >
              料金を見る
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>クレジットカード不要</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>月10件まで無料</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>1分でセットアップ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">今すぐ試してみよう</h2>
            <p className="text-slate-400">レビューを入力すると、AIが最適な返信を生成します</p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  レビュー内容を入力
                </label>
                <textarea
                  value={demoReview}
                  onChange={(e) => setDemoReview(e.target.value)}
                  placeholder="例：商品の品質は良かったですが、配送が少し遅かったです。次回はもう少し早く届くと嬉しいです。"
                  className="w-full h-40 bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 resize-none"
                />
                <button
                  onClick={handleDemo}
                  disabled={isGenerating || !demoReview.trim()}
                  className="mt-4 w-full bg-purple-500 hover:bg-purple-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      生成中...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      返信を生成
                    </>
                  )}
                </button>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  AI生成の返信
                </label>
                <div className="w-full h-40 bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white overflow-auto">
                  {demoReply || (
                    <span className="text-slate-500">ここに生成された返信が表示されます</span>
                  )}
                </div>
                {demoReply && (
                  <button
                    onClick={() => navigator.clipboard.writeText(demoReply)}
                    className="mt-4 w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-medium transition"
                  >
                    コピーする
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">なぜReviewGenie？</h2>
            <p className="text-slate-400">レビュー返信の悩みをすべて解決</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <Clock className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">時間を90%削減</h3>
              <p className="text-slate-400">
                1件5分かかっていた返信作成が、わずか30秒に。月100件なら8時間以上の節約。
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <Star className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">評価アップ</h3>
              <p className="text-slate-400">
                丁寧で適切な返信でショップの信頼度向上。返信率100%を簡単に達成。
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <MessageSquare className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">自然な日本語</h3>
              <p className="text-slate-400">
                GPT-4ベースのAIが、ビジネスに適した自然な敬語で返信を生成。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">シンプルな料金プラン</h2>
            <p className="text-slate-400">小規模から大規模まで、あなたのビジネスに最適なプラン</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
              <div className="text-4xl font-bold text-white mb-1">¥0<span className="text-lg font-normal text-slate-400">/月</span></div>
              <p className="text-slate-400 mb-6">お試しに最適</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400" /> 月10件まで
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400" /> 基本テンプレート
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400" /> メールサポート
                </li>
              </ul>
              <a href="/signup" className="block w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg text-center transition">
                無料で始める
              </a>
            </div>

            {/* Pro */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-xl border border-purple-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                人気
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-white mb-1">¥3,000<span className="text-lg font-normal text-purple-200">/月</span></div>
              <p className="text-purple-200 mb-6">成長中のショップに</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-purple-200" /> 月100件まで
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-purple-200" /> カスタムテンプレート
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-purple-200" /> 優先サポート
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-purple-200" /> 履歴管理
                </li>
              </ul>
              <a href="/signup?plan=pro" className="block w-full bg-white hover:bg-purple-50 text-purple-600 py-3 rounded-lg text-center font-medium transition">
                Proを始める
              </a>
            </div>

            {/* Business */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-2">Business</h3>
              <div className="text-4xl font-bold text-white mb-1">¥9,800<span className="text-lg font-normal text-slate-400">/月</span></div>
              <p className="text-slate-400 mb-6">大規模ショップに</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400" /> 無制限
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400" /> API連携
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400" /> 専任サポート
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400" /> チーム管理
                </li>
              </ul>
              <a href="/signup?plan=business" className="block w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg text-center transition">
                Businessを始める
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            今すぐレビュー返信を自動化しよう
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            月10件まで永久無料。クレジットカード不要。
          </p>
          <a 
            href="/signup" 
            className="inline-flex items-center gap-2 bg-white hover:bg-purple-50 text-purple-600 px-8 py-4 rounded-lg text-lg font-medium transition"
          >
            無料アカウントを作成 <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="text-lg font-bold text-white">ReviewGenie</span>
            </div>
            <div className="flex gap-6 text-slate-400">
              <a href="/terms" className="hover:text-white transition">利用規約</a>
              <a href="/privacy" className="hover:text-white transition">プライバシー</a>
              <a href="/contact" className="hover:text-white transition">お問い合わせ</a>
              <a href="/tokushoho" className="hover:text-white transition">特定商取引法</a>
            </div>
            <p className="text-slate-500">© 2026 ReviewGenie</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
