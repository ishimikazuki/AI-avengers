import { Sparkles, ArrowLeft } from 'lucide-react';

export default function Terms() {
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
        <h1 className="text-3xl font-bold text-white mb-8">利用規約</h1>
        
        <div className="space-y-8 text-slate-300">
          <p>この利用規約（以下「本規約」）は、ReviewGenie（以下「当サービス」）の利用条件を定めるものです。ユーザーの皆様には、本規約に同意いただいた上で、当サービスをご利用いただきます。</p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">第1条（適用）</h2>
            <p>本規約は、ユーザーと当サービスとの間の関係に適用されます。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">第2条（利用登録）</h2>
            <p>登録希望者が当サービスの定める方法によって利用登録を申請し、当サービスがこれを承認することによって、利用登録が完了するものとします。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">第3条（禁止事項）</h2>
            <p>ユーザーは、以下の行為をしてはなりません：</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当サービスのサーバーまたはネットワークに過度な負担をかける行為</li>
              <li>当サービスの運営を妨害する行為</li>
              <li>他のユーザーに関する個人情報を収集または蓄積する行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>その他、当サービスが不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">第4条（サービスの提供停止等）</h2>
            <p>当サービスは、以下の場合、事前通知なくサービスの提供を停止または中断することができます：</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>システムのメンテナンスを行う場合</li>
              <li>地震、停電等の不可抗力により提供が困難な場合</li>
              <li>その他、当サービスが停止を必要と判断した場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">第5条（利用料金および支払方法）</h2>
            <p>ユーザーは、サービス利用の対価として、別途定める利用料金を支払うものとします。支払いはクレジットカードによる決済とし、Stripeを通じて処理されます。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">第6条（退会）</h2>
            <p>ユーザーは、当サービスの定める手続きにより、いつでも退会できます。有料プランの場合、契約期間終了までサービスをご利用いただけます。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">第7条（免責事項）</h2>
            <p>当サービスは、AIによって生成されたコンテンツの正確性、適切性について保証しません。生成された返信文はユーザーの責任においてご使用ください。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">第8条（規約の変更）</h2>
            <p>当サービスは、必要と判断した場合、ユーザーへの事前通知なく本規約を変更できるものとします。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">第9条（準拠法・裁判管轄）</h2>
            <p>本規約の解釈には日本法を準拠法とします。当サービスに関する紛争については、東京地方裁判所を専属的合意管轄とします。</p>
          </section>

          <p className="text-slate-500 text-sm mt-8">最終更新日: 2026年2月18日</p>
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
