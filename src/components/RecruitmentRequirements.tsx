import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Users, GraduationCap, Clock, DollarSign, Heart, Briefcase } from 'lucide-react';

const RecruitmentRequirements: React.FC = () => {
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

  const requirements = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "応募資格",
      content: "2026年3月に大学・大学院・専門学校を卒業予定の方\n学部・学科不問（文系・理系問わず歓迎）"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "募集人数",
      content: "10名程度\n（システム営業：4名、システムエンジニア：4名、プログラマー：2名）"
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "勤務地",
      content: "本社：東京都渋谷区渋谷1-1-1\n（JR渋谷駅より徒歩5分）\n転勤の可能性：なし"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "勤務時間",
      content: "9:00～18:00（実働8時間）\n休憩時間：12:00～13:00\nフレックスタイム制度あり"
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "休日・休暇",
      content: "完全週休2日制（土・日）\n祝日、年末年始休暇\n有給休暇（初年度10日）\n夏季休暇、慶弔休暇"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "初任給",
      content: "大学卒：月給25万円\n大学院卒：月給27万円\n専門学校卒：月給23万円\n※試用期間3ヶ月（条件変更なし）"
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "福利厚生",
      content: "各種社会保険完備\n交通費全額支給\n住宅手当（月2万円）\n資格取得支援制度\n健康診断・人間ドック"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "研修制度",
      content: "新入社員研修（3ヶ月）\nOJT研修（6ヶ月）\n外部研修参加支援\nメンター制度\n定期的なスキルアップ研修"
    }
  ];

  return (
    <section id="requirements" ref={sectionRef} className="py-20 bg-gray-50 fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            応募<span className="text-blue-600">要項</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            新卒採用の詳細な募集要項をご確認ください
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-xl">
                  {requirement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {requirement.title}
                  </h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {requirement.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">選考プロセス</h3>
            <div className="grid md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">エントリー</h4>
                <p className="text-sm opacity-90">Webエントリー</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">書類選考</h4>
                <p className="text-sm opacity-90">履歴書・ES審査</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">面接</h4>
                <p className="text-sm opacity-90">2回（個人面接）</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">内定</h4>
                <p className="text-sm opacity-90">最終結果通知</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              <Calendar className="w-6 h-6 text-blue-600 inline-block mr-2" />
              選考スケジュール
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
              <div>
                <div className="font-semibold text-blue-600 mb-2">エントリー締切</div>
                <div>2025年3月31日（月）</div>
              </div>
              <div>
                <div className="font-semibold text-blue-600 mb-2">選考期間</div>
                <div>2025年4月1日～4月30日</div>
              </div>
              <div>
                <div className="font-semibold text-blue-600 mb-2">内定通知</div>
                <div>2025年5月上旬予定</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentRequirements;