'use client';

import { useState } from 'react';
import { Sparkles, ArrowLeft, CheckCircle } from 'lucide-react';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    shopName: '',
    platform: 'rakuten'
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement signup with Supabase
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <a href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" /> トップに戻る
          </a>

          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-10 h-10 text-purple-400" />
            <span className="text-2xl font-bold text-white">ReviewGenie</span>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">無料アカウント作成</h1>
          <p className="text-slate-400 mb-8">月10件まで永久無料。クレジットカード不要。</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                パスワード
              </label>
              <input
                type="password"
                required
                minLength={8}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                placeholder="8文字以上"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                ショップ名
              </label>
              <input
                type="text"
                required
                value={formData.shopName}
                onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                placeholder="あなたのショップ名"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                主な販売プラットフォーム
              </label>
              <select
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              >
                <option value="rakuten">楽天市場</option>
                <option value="amazon">Amazon</option>
                <option value="shopify">Shopify</option>
                <option value="yahoo">Yahoo!ショッピング</option>
                <option value="other">その他</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-purple-500 hover:bg-purple-600 disabled:bg-purple-500/50 text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  作成中...
                </>
              ) : (
                'アカウントを作成'
              )}
            </button>

            <p className="text-center text-slate-400 text-sm">
              アカウントをお持ちですか？{' '}
              <a href="/login" className="text-purple-400 hover:text-purple-300">
                ログイン
              </a>
            </p>

            <p className="text-center text-slate-500 text-xs">
              作成することで
              <a href="/terms" className="text-purple-400 hover:underline">利用規約</a>
              と
              <a href="/privacy" className="text-purple-400 hover:underline">プライバシーポリシー</a>
              に同意したことになります。
            </p>
          </form>
        </div>
      </div>

      {/* Info Side */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-purple-600 to-pink-600 items-center justify-center p-8">
        <div className="max-w-md text-white">
          <h2 className="text-3xl font-bold mb-6">
            1分でセットアップ完了
          </h2>
          <ul className="space-y-4">
            {[
              'アカウント作成（今ここ）',
              'レビューを貼り付け',
              'AIが返信を生成',
              'コピーして投稿',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-medium">
                  {i + 1}
                </div>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur">
            <p className="text-purple-100 italic">
              "導入初日から返信作業が楽になりました。もう手放せません！"
            </p>
            <p className="mt-4 text-sm text-purple-200">— 楽天ショップオーナー</p>
          </div>
        </div>
      </div>
    </div>
  );
}
