import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white mb-8 block">
          Review<span className="text-emerald-400">Genie</span>
        </Link>
        
        <h1 className="text-3xl font-bold text-white mb-8">特定商取引法に基づく表記</h1>
        
        <div className="bg-gray-800 rounded-2xl p-8">
          <table className="w-full">
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="py-4 text-gray-400 w-1/3">販売業者</td>
                <td className="py-4 text-white">ReviewGenie運営事務局</td>
              </tr>
              <tr>
                <td className="py-4 text-gray-400">運営責任者</td>
                <td className="py-4 text-white">（お問い合わせ時に開示）</td>
              </tr>
              <tr>
                <td className="py-4 text-gray-400">所在地</td>
                <td className="py-4 text-white">（お問い合わせ時に開示）</td>
              </tr>
              <tr>
                <td className="py-4 text-gray-400">お問い合わせ</td>
                <td className="py-4 text-white">support@reviewgenie.jp</td>
              </tr>
              <tr>
                <td className="py-4 text-gray-400">販売価格</td>
                <td className="py-4 text-white">
                  Free: 無料<br />
                  Pro: 月額3,000円（税込）<br />
                  Business: 月額9,800円（税込）
                </td>
              </tr>
              <tr>
                <td className="py-4 text-gray-400">支払方法</td>
                <td className="py-4 text-white">クレジットカード（Stripe経由）</td>
              </tr>
              <tr>
                <td className="py-4 text-gray-400">支払時期</td>
                <td className="py-4 text-white">お申し込み時に即時決済</td>
              </tr>
              <tr>
                <td className="py-4 text-gray-400">サービス提供時期</td>
                <td className="py-4 text-white">お支払い完了後、即時</td>
              </tr>
              <tr>
                <td className="py-4 text-gray-400">返品・キャンセル</td>
                <td className="py-4 text-white">
                  デジタルサービスの性質上、お支払い後の返金は原則として承っておりません。<br />
                  サブスクリプションはいつでもキャンセル可能です（次回更新日より適用）。
                </td>
              </tr>
              <tr>
                <td className="py-4 text-gray-400">動作環境</td>
                <td className="py-4 text-white">
                  モダンブラウザ（Chrome、Firefox、Safari、Edge最新版）<br />
                  インターネット接続環境
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
