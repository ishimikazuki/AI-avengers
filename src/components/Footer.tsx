import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold">AI Crew</span>
            </div>
            <p className="text-gray-400 text-sm">
              EC事業者のための<br />AIエージェント自動化プラットフォーム
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">プロダクト</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/#features" className="hover:text-white transition">機能</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">料金プラン</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition">ダッシュボード</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">サポート</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">ヘルプセンター</a></li>
              <li><a href="#" className="hover:text-white transition">API ドキュメント</a></li>
              <li><a href="#" className="hover:text-white transition">お問い合わせ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">会社</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">会社概要</a></li>
              <li><a href="#" className="hover:text-white transition">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-white transition">利用規約</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 AI Crew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
