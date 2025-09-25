import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // シミュレートされた送信処理
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', motivation: '' });
  };

  if (isSubmitted) {
    return (
      <section id="application" ref={sectionRef} className="py-20 bg-gradient-to-br from-red-50 to-gray-50 fade-in">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              エントリーありがとうございます！
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              送信いただいた内容を確認し、担当者より1週間以内にご連絡いたします。
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              新しいエントリーを送信する
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="application" ref={sectionRef} className="py-20 bg-gradient-to-br from-red-50 to-gray-50 fade-in">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            応募<span className="text-blue-600">方法</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            まずはお気軽にエントリーください。皆さんとお会いできることを楽しみにしています
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-gray-50 focus:bg-white"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50 focus:bg-white"
                  placeholder="山田 太郎"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-gray-50 focus:bg-white"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50 focus:bg-white"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
                志望動機 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-gray-50 focus:bg-white resize-none"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50 focus:bg-white resize-none"
                  placeholder="なぜ当社を志望されたのか、あなたの想いをお聞かせください..."
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    送信中...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    エントリーを送信
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;