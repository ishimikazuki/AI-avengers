'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [review, setReview] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [tone, setTone] = useState('polite');

  const generateResponse = async () => {
    if (!review.trim()) return;
    
    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review, tone }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Generation error:', error);
      setResponse('エラーが発生しました。もう一度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-gray-800 p-6">
        <div className="text-2xl font-bold text-white mb-8">
          Review<span className="text-emerald-400">Genie</span>
        </div>
        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 text-white bg-gray-700 px-4 py-3 rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            レビュー返信
          </Link>
          <Link
            href="/dashboard/history"
            className="flex items-center gap-3 text-gray-400 hover:text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            履歴
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 text-gray-400 hover:text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            設定
          </Link>
        </nav>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-1">今月の利用</div>
            <div className="text-2xl font-bold text-white">7 / 10</div>
            <div className="text-sm text-gray-400">件</div>
            <Link
              href="/pricing"
              className="block mt-3 text-center text-emerald-400 text-sm hover:underline"
            >
              アップグレード
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <h1 className="text-3xl font-bold text-white mb-8">レビュー返信を生成</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input */}
          <div className="bg-gray-800 rounded-2xl p-6">
            <label className="block text-gray-300 mb-2 font-medium">
              お客様のレビュー
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg p-4 h-48 focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none"
              placeholder="レビューをここに貼り付けてください..."
            />
            
            <label className="block text-gray-300 mt-4 mb-2 font-medium">
              トーン
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              <option value="polite">丁寧</option>
              <option value="casual">カジュアル</option>
              <option value="formal">フォーマル</option>
              <option value="friendly">フレンドリー</option>
            </select>

            <button
              onClick={generateResponse}
              disabled={loading || !review.trim()}
              className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '生成中...' : 'AIで返信を生成'}
            </button>
          </div>

          {/* Output */}
          <div className="bg-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-gray-300 font-medium">
                生成された返信
              </label>
              {response && (
                <button
                  onClick={copyToClipboard}
                  className="text-emerald-400 text-sm hover:underline flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  コピー
                </button>
              )}
            </div>
            <div className="bg-gray-700 rounded-lg p-4 h-48 overflow-y-auto">
              {response ? (
                <p className="text-white whitespace-pre-wrap">{response}</p>
              ) : (
                <p className="text-gray-500">
                  左側にレビューを入力して「AIで返信を生成」をクリックしてください。
                </p>
              )}
            </div>
            
            {response && (
              <div className="mt-4 flex gap-2">
                <button
                  onClick={generateResponse}
                  className="flex-1 border border-gray-600 text-gray-300 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  再生成
                </button>
                <button
                  onClick={copyToClipboard}
                  className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-500 transition"
                >
                  コピーして使う
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">💡 ヒント</h2>
          <ul className="text-gray-400 space-y-2">
            <li>• ネガティブなレビューには、まず謝罪から始める返信が効果的です</li>
            <li>• 具体的な改善策を含めると、誠意が伝わります</li>
            <li>• ポジティブなレビューには、感謝と今後の来店を促すメッセージを</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
