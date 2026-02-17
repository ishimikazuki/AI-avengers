'use client';

import { useState } from 'react';
import { Sparkles, Home, MessageSquare, History, Settings, CreditCard, LogOut, Copy, CheckCircle, Loader2 } from 'lucide-react';

export default function Dashboard() {
  const [review, setReview] = useState('');
  const [reply, setReply] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [tone, setTone] = useState('formal');
  const [usageCount, setUsageCount] = useState(3);
  const maxUsage = 10;

  const handleGenerate = async () => {
    if (!review.trim() || isGenerating) return;
    setIsGenerating(true);
    
    // Simulate API call to OpenAI
    setTimeout(() => {
      const tonePrefix = tone === 'formal' ? 'お客様' : tone === 'friendly' ? 'この度は' : '';
      setReply(`${tonePrefix}、貴重なレビューをいただき、誠にありがとうございます。

${review.includes('良') || review.includes('満足') || review.includes('気に入')
  ? 'ご満足いただけたようで、スタッフ一同大変嬉しく思っております。お客様のお言葉が私たちの励みになります。'
  : 'ご指摘いただいた点につきまして、真摯に受け止め、今後のサービス改善に努めてまいります。'}

今後とも変わらぬご愛顧のほど、よろしくお願いいたします。
またのご利用を心よりお待ちしております。`);
      setIsGenerating(false);
      setUsageCount(prev => prev + 1);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(reply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">ReviewGenie</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { icon: Home, label: '返信生成', active: true },
            { icon: History, label: '履歴', badge: '23' },
            { icon: MessageSquare, label: 'テンプレート' },
            { icon: CreditCard, label: '料金プラン' },
            { icon: Settings, label: '設定' },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center justify-between px-4 py-3 rounded-lg transition ${
                item.active
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-slate-600 text-xs px-2 py-0.5 rounded-full">{item.badge}</span>
              )}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400">今月の利用</span>
              <span className="text-white">{usageCount} / {maxUsage}</span>
            </div>
            <div className="w-full bg-slate-600 rounded-full h-2">
              <div 
                className="bg-purple-500 h-2 rounded-full transition-all"
                style={{ width: `${(usageCount / maxUsage) * 100}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">Freeプラン</p>
          </div>
          <a href="/pricing" className="block w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg text-center text-sm transition">
            Proにアップグレード
          </a>
        </div>

        <div className="p-4 border-t border-slate-700">
          <button className="flex items-center gap-3 text-slate-400 hover:text-white transition">
            <LogOut className="w-5 h-5" />
            <span>ログアウト</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-2">レビュー返信を生成</h1>
          <p className="text-slate-400 mb-8">レビューを貼り付けて、AIに最適な返信を作成させましょう</p>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Input */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-white">レビュー内容</h2>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="formal">丁寧</option>
                  <option value="friendly">フレンドリー</option>
                  <option value="apologetic">お詫び</option>
                </select>
              </div>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="ここにレビューを貼り付けてください...

例：
★★★★☆
商品自体はとても良かったです。素材もしっかりしていて、サイズもぴったりでした。ただ、配送が思ったより時間がかかったのが少し残念でした。"
                className="w-full h-64 bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 resize-none"
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !review.trim() || usageCount >= maxUsage}
                className="mt-4 w-full bg-purple-500 hover:bg-purple-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    生成中...
                  </>
                ) : usageCount >= maxUsage ? (
                  '利用上限に達しました'
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    返信を生成
                  </>
                )}
              </button>
            </div>

            {/* Output */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-white">生成された返信</h2>
                {reply && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        コピー済み
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        コピー
                      </>
                    )}
                  </button>
                )}
              </div>
              <div className="w-full h-64 bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white overflow-auto">
                {reply ? (
                  <p className="whitespace-pre-wrap">{reply}</p>
                ) : (
                  <p className="text-slate-500">
                    生成された返信がここに表示されます。
                    <br /><br />
                    左側にレビューを入力して「返信を生成」をクリックしてください。
                  </p>
                )}
              </div>
              {reply && (
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-sm transition"
                  >
                    再生成
                  </button>
                  <button
                    onClick={handleCopy}
                    className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg text-sm transition"
                  >
                    コピーして使う
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-purple-400 font-medium mb-2">💡 Tips</h3>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• レビューの★評価も含めると、より適切な返信が生成されます</li>
              <li>• 「お詫び」トーンを選ぶと、クレーム対応に適した文面になります</li>
              <li>• 生成された返信は必要に応じて編集してからご使用ください</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
