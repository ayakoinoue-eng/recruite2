import React, { useEffect, useRef } from 'react';
import { Code, Globe, Server } from 'lucide-react';

const BusinessIntroduction: React.FC = () => {
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

  const businesses = [
    {
      icon: <Code className="w-16 h-16 text-red-600" />,
      title: "システム開発事業",
      description: "最新のテクノロジーを駆使したシステムの企画・開発・運用",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      accent: "from-red-600 to-red-800"
    },
    {
      icon: <Globe className="w-16 h-16 text-red-600" />,
      title: "デジタル戦略コンサル",
      description: "企業のデジタル変革を支援する戦略的コンサルティング",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      accent: "from-red-600 to-red-800"
    },
    {
      icon: <Server className="w-16 h-16 text-red-600" />,
      title: "ネットワーク・インフラ構築",
      description: "安全で高性能なネットワークインフラの設計・構築・運用",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      accent: "from-gray-800 to-black"
    }
  ];

  return (
    <section ref={sectionRef} 
	          id="business"// ← ここに追加
	   className="py-20 bg-gray-900 fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            事業<span className="text-red-500">紹介</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            私たちが手がける革新的なビジネス領域
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={business.image}
                  alt={business.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${business.accent} opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {business.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{business.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{business.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessIntroduction;