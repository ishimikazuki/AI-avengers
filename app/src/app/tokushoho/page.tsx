import { Sparkles, ArrowLeft } from 'lucide-react';

export default function Tokushoho() {
  return (
    <div className="min-h-screen bg-slate-900">
      <header className="border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">ReviewGenie</span>
          </a>
          <a href="/" className="text-slate-400 hover:text-white flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> 戻る
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">特定商取引法に基づく表記</h1>
        
        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">販売業者</h2>
            <p>ReviewGenie運営事務局</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">運営統括責任者</h2>
            <p>代表者名（お問い合わせ時に開示）</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">所在地</h2>
            <p>請求があった場合に遅滞なく開示いたします</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">電話番号</h2>
            <p>請求があった場合に遅滞なく開示いたします</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">メールアドレス</h2>
            <p>support@reviewgenie.jp</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">販売価格</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Free: 0円/月</li>
              <li>Pro: 3,000円/月（税込）</li>
              <li>Business: 9,800円/月（税込）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">支払方法</h2>
            <p>クレジットカード決済（Visa、Mastercard、American Express、JCB）</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">支払時期</h2>
            <p>サブスクリプション契約時に初回決済、以後毎月同日に自動決済</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">サービス提供時期</h2>
            <p>決済完了後、即時利用可能</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">返品・キャンセル</h2>
            <p>デジタルサービスの性質上、サービス提供開始後の返金はできません。</p>
            <p>サブスクリプションはいつでも解約可能です。解約後も契約期間終了まではサービスをご利用いただけます。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">動作環境</h2>
            <p>最新版のChrome、Firefox、Safari、Edgeブラウザ</p>
          </section>
        </div>
      </main>

      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center text-slate-500 text-sm">
          <p>© 2026 ReviewGenie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
