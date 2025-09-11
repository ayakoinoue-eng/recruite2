import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const StaffVoices: React.FC = () => {
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

  const staffMembers = [
    {
      name: "佐藤 美咲",
      position: "Webエンジニア（2022年入社）",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      comment: "入社当初は不安もありましたが、先輩方のサポートが手厚く、自分のペースで成長できました。今では大きなプロジェクトも任せてもらえるようになり、とてもやりがいを感じています。"
    },
    {
      name: "山田 健太",
      position: "デザイナー（2021年入社）",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      comment: "クリエイティブな環境で、自分のアイデアを形にできることが最高です。チーム全体でユーザーのことを第一に考える文化があり、デザイナーとしてとても成長できています。"
    },
    {
      name: "田中 愛子",
      position: "営業（2023年入社）",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      comment: "お客様の課題を技術で解決できた時の喜びは格別です。営業といっても技術的な知識も身につけられ、エンジニアチームとの連携も取りやすい環境です。"
    },
    {
      name: "鈴木 大輔",
      position: "マーケティング（2022年入社）",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      comment: "データドリブンなマーケティングを実践できる環境が整っています。新しい施策にも積極的にチャレンジできるため、スキルアップが実感できます。"
    }
  ];

  return (
    <section ref={sectionRef} 
	          id="voices"// ← ここに追加
	   className="py-20 bg-white fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            先輩スタッフの<span className="text-red-600">声</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            実際に働いているメンバーの生の声をお届けします
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-full">
                  <Quote size={16} />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-red-600 font-medium mb-4">{member.position}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {member.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffVoices;