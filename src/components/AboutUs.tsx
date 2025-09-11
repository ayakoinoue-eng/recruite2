import React, { useEffect, useRef } from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-red-600">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            私たちは、一人ひとりの個性と想いを大切にしながら、
            共に成長し続ける企業です
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">企業理念</h3>
            <p className="text-gray-600">
              一人ひとりの「想い」を大切にし、その力を社会の発展につなげていく
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">価値観</h3>
            <p className="text-gray-600">
              多様な背景を持つメンバーが協力し、新しい価値を創造し続ける
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Lightbulb className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">ビジョン</h3>
            <p className="text-gray-600">
              テクノロジーの力で、人々の生活をより豊かで便利にする
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">代表メッセージ</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                新卒で入社される皆さんには、まず私たちの企業文化を肌で感じていただき、
                自分らしい働き方を見つけてほしいと思います。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                失敗を恐れず挑戦する気持ちを大切に、共に新しい未来を築いていきましょう。
                皆さんの新鮮な視点と情熱が、私たちの原動力です。
              </p>
              <p className="text-right text-gray-900 font-semibold mt-8">
                代表取締役社長 田中 太郎
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="代表取締役社長"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;