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
      name: "田中 健太",
      position: "システム営業（2022年入社）",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      details: {
        background: "大学では経営学部でマーケティングを専攻し、テニス部に所属していました。アルバイトは家電量販店で接客を経験。人と話すことが好きで、技術を通じてお客様の課題解決ができる仕事に魅力を感じ、この会社を選びました。",
        work: "現在は既存顧客のフォローアップと新規開拓を担当しています。朝は社内ミーティングから始まり、午前中は顧客訪問、午後は提案書作成や見積もり作業を行っています。初めて大型案件を受注できた時は本当に嬉しく、お客様から「ありがとう」と言われる瞬間にやりがいを感じます。",
        atmosphere: "先輩方は技術的な質問にも丁寧に答えてくれ、お客様との商談にも同行してサポートしてくれます。営業とエンジニアの垣根が低く、チーム一丸となってプロジェクトに取り組む雰囲気があります。新人研修では他部署との交流もあり、会社全体の一体感を感じました。",
        growth: "入社当初は技術的な知識が不足していましたが、社内勉強会や資格取得支援のおかげで、今ではお客様と技術的な話もできるようになりました。将来はマネージャーとして後輩を指導し、より大きなプロジェクトを統括したいと考えています。",
        message: "営業職でも技術を学べる環境があるので、文系出身でも安心してください。学生時代は様々な人とのコミュニケーションを大切にし、相手の立場に立って考える経験を積んでおくと良いと思います。"
      }
    },
    {
      name: "佐藤 美咲",
      position: "システムエンジニア（2021年入社）",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      details: {
        background: "情報工学部でソフトウェア開発を学び、研究室ではWebアプリケーションの開発に取り組んでいました。アルバイトはプログラミング塾の講師をしていました。技術力を活かして社会に貢献できる仕事がしたく、成長環境が整ったこの会社を選びました。",
        work: "主にWebシステムの設計・開発を担当しています。朝は前日の進捗確認、午前中は設計書作成やコーディング、午後はテストやお客様との打ち合わせを行います。初めて一人で担当したシステムが無事稼働した時の達成感は忘れられません。お客様の業務効率が向上したと聞いた時に大きなやりがいを感じます。",
        atmosphere: "先輩エンジニアは技術的な相談に親身になって答えてくれ、コードレビューも丁寧に行ってくれます。チーム内での情報共有が活発で、困った時はすぐに助けを求められる環境です。技術勉強会や外部セミナーへの参加も推奨されており、学習意欲の高いメンバーが多いです。",
        growth: "入社時は基本的なプログラミングスキルしかありませんでしたが、今では要件定義から運用まで一連の開発工程を担当できるようになりました。今後はプロジェクトリーダーとして、技術面だけでなくマネジメントスキルも身につけたいと思っています。",
        message: "技術は入社後でも十分学べるので、学生時代は基礎をしっかり固めることが大切です。また、チーム開発の経験があると入社後に役立ちます。失敗を恐れず、積極的にチャレンジする姿勢を持ち続けてください。"
      }
    },
    {
      name: "山田 拓也",
      position: "プログラマー（2023年入社）",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      details: {
        background: "コンピュータサイエンス学科でアルゴリズムやデータ構造を学び、個人でWebアプリやゲームを開発していました。プログラミングコンテストにも参加していました。技術力を磨きながら実際のサービス開発に携われる環境を求めて、この会社を選びました。",
        work: "主にバックエンドの開発を担当し、データベース設計やAPI開発を行っています。朝はチームでの進捗共有、午前中はコーディング、午後はテストやバグ修正を中心に作業しています。初めて自分が書いたコードが本番環境で動いた時は感動しました。複雑な処理を効率的に実装できた時に達成感を感じます。",
        atmosphere: "先輩プログラマーは技術的な質問に対して具体的なコード例を示しながら教えてくれます。ペアプログラミングの機会も多く、実践的なスキルを身につけられます。社内ハッカソンや技術LTなど、エンジニア同士の交流イベントも充実しており、刺激的な環境です。",
        growth: "入社当初は個人開発の経験しかありませんでしたが、今ではチーム開発でのコードレビューやテスト駆動開発などの手法を身につけました。将来は技術的なスペシャリストとして、新しい技術の導入や技術選定に関わりたいと考えています。",
        message: "プログラミングが好きなら、きっと楽しく働けると思います。学生時代は個人プロジェクトでも良いので、最後まで作り上げる経験を積んでください。また、GitHubなどで自分のコードを公開しておくと、面接でのアピールにもなります。"
      }
    }
  ];

  return (
    <section ref={sectionRef} 
	          id="voices"// ← ここに追加
	   className="py-20 bg-white fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            先輩スタッフの<span className="text-blue-600">声</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            実際に働いているメンバーの生の声をお届けします
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white p-2 rounded-full">
                  <Quote size={16} />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-4">{member.position}</p>
                
                <div className="text-left space-y-4 text-sm text-gray-700 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">入社前について</h4>
                    <p>{member.details.background}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">現在の仕事</h4>
                    <p>{member.details.work}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">会社の雰囲気</h4>
                    <p>{member.details.atmosphere}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">成長・キャリア</h4>
                    <p>{member.details.growth}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">就活生へのメッセージ</h4>
                    <p>{member.details.message}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffVoices;