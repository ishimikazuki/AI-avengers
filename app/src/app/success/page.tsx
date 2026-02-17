'use client';

import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          お支払い完了！
        </h1>
        <p className="text-gray-400 mb-8">
          ReviewGenieへようこそ！アカウントが有効化されました。
          今すぐレビュー返信の自動化を始めましょう。
        </p>
        <Link
          href="/dashboard"
          className="inline-block w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-500 transition"
        >
          ダッシュボードへ
        </Link>
        <p className="mt-6 text-sm text-gray-500">
          確認メールをお送りしました。届かない場合はサポートにご連絡ください。
        </p>
      </div>
    </div>
  );
}
