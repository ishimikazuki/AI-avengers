'use client';

import { useState } from 'react';
import Link from 'next/link';

const sidebarItems = [
  { icon: '📊', label: '概要', id: 'overview' },
  { icon: '💬', label: 'レビュー管理', id: 'reviews' },
  { icon: '📦', label: '在庫アラート', id: 'inventory' },
  { icon: '📈', label: 'レポート', id: 'reports' },
  { icon: '🤖', label: 'AIエージェント', id: 'agents' },
  { icon: '⚙️', label: '設定', id: 'settings' },
];

const recentReviews = [
  { id: 1, product: 'ワイヤレスイヤホン Pro', rating: 5, content: '音質が素晴らしい！', status: '返信済み', time: '2時間前' },
  { id: 2, product: 'スマートウォッチ X', rating: 4, content: 'バッテリー持ちが良い', status: '返信待ち', time: '3時間前' },
  { id: 3, product: 'USBハブ 7ポート', rating: 3, content: '少し発熱が気になる', status: 'AI返信中', time: '5時間前' },
  { id: 4, product: 'モバイルバッテリー', rating: 5, content: '軽くて持ち運びやすい', status: '返信済み', time: '6時間前' },
];

const inventoryAlerts = [
  { product: 'ワイヤレスイヤホン Pro（白）', stock: 5, threshold: 10, status: '要発注' },
  { product: 'スマートウォッチ X（黒）', stock: 8, threshold: 15, status: '注意' },
  { product: 'USB-C ケーブル 2m', stock: 3, threshold: 20, status: '緊急' },
];

const stats = [
  { label: '今月の売上', value: '¥2,450,000', change: '+12%', up: true },
  { label: 'レビュー返信率', value: '98.5%', change: '+3%', up: true },
  { label: 'AI処理件数', value: '1,234', change: '+25%', up: true },
  { label: '平均応答時間', value: '2.5分', change: '-40%', up: true },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 lg:translate-x-0 lg:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-gray-100">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-gray-900">AI Crew</span>
          </Link>
        </div>
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
                activeTab === item.id
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <div className="bg-indigo-50 rounded-xl p-4">
            <p className="text-sm font-medium text-indigo-900">Proプラン</p>
            <p className="text-xs text-indigo-600 mt-1">トライアル残り12日</p>
            <Link href="/pricing" className="mt-3 block text-center bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
              アップグレード
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setSidebarOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="search"
                placeholder="検索..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-indigo-600 font-medium">田</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">おかえりなさい、田中さん 👋</h1>
            <p className="text-gray-600 mt-1">今日もAIエージェントがあなたのEC事業をサポートします</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className={`text-sm mt-2 ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} 前月比
                </p>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Reviews */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">最近のレビュー</h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-700">すべて見る →</button>
              </div>
              <div className="divide-y divide-gray-100">
                {recentReviews.map((review) => (
                  <div key={review.id} className="p-4 hover:bg-gray-50 transition">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{review.product}</p>
                        <div className="flex items-center mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        review.status === '返信済み' ? 'bg-green-100 text-green-700' :
                        review.status === 'AI返信中' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {review.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{review.content}</p>
                    <p className="text-gray-400 text-xs mt-2">{review.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inventory Alerts */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">在庫アラート</h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-700">すべて見る →</button>
              </div>
              <div className="divide-y divide-gray-100">
                {inventoryAlerts.map((item) => (
                  <div key={item.product} className="p-4 hover:bg-gray-50 transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">{item.product}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          残り <span className="font-semibold text-red-600">{item.stock}</span> 個
                          （閾値: {item.threshold}個）
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === '緊急' ? 'bg-red-100 text-red-700' :
                        item.status === '要発注' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            item.stock / item.threshold < 0.3 ? 'bg-red-500' :
                            item.stock / item.threshold < 0.6 ? 'bg-orange-500' :
                            'bg-green-500'
                          }`}
                          style={{ width: `${Math.min((item.stock / item.threshold) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-100">
                <button className="w-full bg-indigo-50 text-indigo-600 py-2 rounded-lg font-medium hover:bg-indigo-100 transition">
                  一括発注リストを作成
                </button>
              </div>
            </div>
          </div>

          {/* AI Agents Status */}
          <div className="mt-6 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">AIエージェント稼働状況</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: 'レビュー返信エージェント', status: '稼働中', processed: '156件/今日', icon: '💬' },
                { name: '在庫監視エージェント', status: '稼働中', processed: '24時間監視中', icon: '📦' },
                { name: 'レポート生成エージェント', status: '待機中', processed: '次回: 明日 9:00', icon: '📊' },
              ].map((agent) => (
                <div key={agent.name} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{agent.icon}</span>
                    <div>
                      <p className="font-medium text-gray-900">{agent.name}</p>
                      <div className="flex items-center mt-1">
                        <span className={`w-2 h-2 rounded-full mr-2 ${
                          agent.status === '稼働中' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></span>
                        <span className="text-sm text-gray-500">{agent.status}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{agent.processed}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
