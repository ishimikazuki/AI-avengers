import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white mb-8 block">
          Review<span className="text-emerald-400">Genie</span>
        </Link>
        
        <h1 className="text-3xl font-bold text-white mb-8">利用規約</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">第1条（適用）</h2>
            <p className="text-gray-400">
              本規約は、ReviewGenie（以下「本サービス」）の利用に関する条件を定めるものです。
              ユーザーは、本規約に同意した上で本サービスを利用するものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">第2条（サービス内容）</h2>
            <p className="text-gray-400">
              本サービスは、AIを活用したレビュー返信文の自動生成サービスです。
              生成された文章の最終的な確認・編集は、ユーザーの責任において行うものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">第3条（料金）</h2>
            <p className="text-gray-400">
              本サービスの料金は、料金ページに記載の通りです。
              有料プランはサブスクリプション形式で、毎月自動更新されます。
              解約は管理画面からいつでも可能です。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">第4条（禁止事項）</h2>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              <li>法令に違反する行為</li>
              <li>他者の権利を侵害する行為</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>不正アクセス、リバースエンジニアリング</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">第5条（免責事項）</h2>
            <p className="text-gray-400">
              本サービスは「現状有姿」で提供されます。
              AIが生成した文章の正確性、適切性について、当社は保証しません。
              生成された文章の利用により生じた損害について、当社は責任を負いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">第6条（準拠法・管轄）</h2>
            <p className="text-gray-400">
              本規約は日本法に準拠します。
              本サービスに関する紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <p className="text-gray-500 mt-8">
            制定日: 2026年2月18日
          </p>
        </div>
      </div>
    </div>
  );
}
