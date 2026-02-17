import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  {
    icon: '💬',
    title: 'レビュー自動返信',
    description: 'AIがカスタマーレビューを分析し、適切な返信を自動生成。24時間365日、迅速な顧客対応を実現します。',
  },
  {
    icon: '📦',
    title: '在庫アラート',
    description: '在庫状況をリアルタイム監視。閾値を下回ると自動通知し、欠品による機会損失を防ぎます。',
  },
  {
    icon: '📊',
    title: 'レポート自動生成',
    description: '売上・アクセス・広告効果を自動分析。毎週のレポートをAIが作成し、意思決定をサポートします。',
  },
  {
    icon: '🔗',
    title: 'マルチプラットフォーム',
    description: 'Amazon、楽天、Yahoo!ショッピング、Shopifyなど主要ECプラットフォームに対応。',
  },
  {
    icon: '🤖',
    title: 'AIエージェント',
    description: '複数のAIエージェントが連携して作業を自動化。人手不足を解消し、業務効率を10倍に。',
  },
  {
    icon: '📈',
    title: '売上予測',
    description: '過去データとトレンドから売上を予測。仕入れや販促計画の最適化を支援します。',
  },
];

const testimonials = [
  {
    name: '田中 太郎',
    role: 'EC事業部長',
    company: '株式会社サンプル',
    content: 'AI Crewを導入してから、レビュー対応の工数が90%削減されました。顧客満足度も向上し、リピート率が1.5倍に。',
    avatar: '👨‍💼',
  },
  {
    name: '鈴木 花子',
    role: 'オーナー',
    company: 'ネットショップ花屋',
    content: '在庫アラート機能のおかげで欠品がなくなり、売上が20%増加。自動レポートで経営判断も素早くなりました。',
    avatar: '👩‍💼',
  },
  {
    name: '佐藤 健一',
    role: 'マーケティング責任者',
    company: 'グローバル商事',
    content: '複数モールの運営が劇的に楽になりました。AIエージェントが24時間働いてくれるので、新規事業に集中できます。',
    avatar: '👨‍💻',
  },
];

const stats = [
  { value: '500+', label: '導入企業数' },
  { value: '90%', label: '工数削減率' },
  { value: '2.5倍', label: '平均売上向上' },
  { value: '24/7', label: '稼働時間' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 EC運営を自動化する次世代AIプラットフォーム
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              EC事業の<span className="gradient-text">全自動化</span>を<br />AIエージェントで実現
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              レビュー返信、在庫管理、レポート作成をAIが自動化。
              月100万円の人件費を削減し、売上を最大化します。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/dashboard"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl"
              >
                14日間無料トライアル →
              </Link>
              <Link
                href="/pricing"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-indigo-200 hover:border-indigo-400 transition"
              >
                料金プランを見る
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-indigo-600">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              EC運営を変える<span className="gradient-text">6つの機能</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AIエージェントがあなたのEC事業をサポート。
              面倒な作業はすべてAIに任せましょう。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">3ステップ</span>で始められる
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'アカウント作成', desc: 'メールアドレスで簡単登録。5分で完了します。' },
              { step: '02', title: 'ECサイト連携', desc: 'APIキーを入力するだけ。Amazon、楽天など主要モールに対応。' },
              { step: '03', title: '自動化スタート', desc: 'AIエージェントが即座に稼働開始。あとはお任せ。' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              導入企業の<span className="gradient-text">声</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 p-6 rounded-2xl">
                <p className="text-gray-700 mb-4">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center">
                  <div className="text-4xl mr-3">{t.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role} / {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            今すぐEC運営を自動化しましょう
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            14日間の無料トライアルで、AI Crewの威力を体感してください。
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            無料で始める →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
