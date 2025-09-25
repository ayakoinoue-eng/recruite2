import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">株式会社テックイノベーション</h3>
            <p className="text-gray-300 leading-relaxed">
              テクノロジーの力で、人々の生活をより豊かで便利にする企業として、
              新しい価値創造に挑戦し続けています。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">お問い合わせ</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>recruit@tech-innovation.co.jp</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>東京都渋谷区渋谷1-1-1</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">採用情報</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors">
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                新卒採用要項
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                中途採用情報
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                インターンシップ
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                よくある質問
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 株式会社テックイノベーション. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  )
}