'use client';

import { useState } from 'react';
import { Sparkles, ArrowLeft } from 'lucide-react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // TODO: Implement login with Supabase
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <a href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4" /> トップに戻る
        </a>

        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="w-10 h-10 text-purple-400" />
          <span className="text-2xl font-bold text-white">ReviewGenie</span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">ログイン</h1>
        <p className="text-slate-400 mb-8">アカウントにログインしてください</p>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

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
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
              placeholder="パスワード"
            />
          </div>

          <div className="flex justify-end">
            <a href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300">
              パスワードを忘れた方
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-500 hover:bg-purple-600 disabled:bg-purple-500/50 text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ログイン中...
              </>
            ) : (
              'ログイン'
            )}
          </button>

          <p className="text-center text-slate-400 text-sm">
            アカウントをお持ちでないですか？{' '}
            <a href="/signup" className="text-purple-400 hover:text-purple-300">
              新規登録
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
