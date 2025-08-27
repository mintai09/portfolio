import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 text-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 px-6 max-w-6xl mx-auto relative z-10">
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 transform hover:scale-[1.02] transition-all duration-300">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              👨‍🔬 석사 연구원 | 딥러닝 & AI 엔지니어
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                  🎓
                </div>
                <span className="font-semibold text-gray-800">학력</span>
              </div>
              <p className="text-sm text-gray-700">상명대학교 소프트웨어학 석사</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl border border-purple-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                  🛠️
                </div>
                <span className="font-semibold text-gray-800">기술 스택</span>
              </div>
              <p className="text-sm text-gray-700">Python, TensorFlow, PyTorch</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-2xl border border-emerald-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-sm">
                  🌍
                </div>
                <span className="font-semibold text-gray-800">관심 분야</span>
              </div>
              <p className="text-sm text-gray-700">LLM, Vision, 시계열 예측</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-2xl border border-orange-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm">
                  🏆
                </div>
                <span className="font-semibold text-gray-800">수상 이력</span>
              </div>
              <p className="text-sm text-gray-700">서울시장상, POSTECH 우수상</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 p-6 rounded-2xl border-l-4 border-blue-400">
              <p className="text-gray-700 leading-relaxed">
                상명대학교 석사 연구원으로서 <strong className="text-blue-600">음성 인식, 시계열 예측, LLM</strong> 등의 다양한 AI 기술을 연구하였으며, <strong className="text-indigo-600">SCI 논문 4편, 학회 논문 10편</strong>을 발표한 경험이 있습니다.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50/80 to-pink-50/80 p-6 rounded-2xl border-l-4 border-purple-400">
              <p className="text-gray-700 leading-relaxed">
                특히 <strong className="text-purple-600">음성 기반 주문 시스템, 자연환기량 예측, 의료 분야 LLM 응용</strong> 등에 관심이 있으며, 실제 환경에 적용 가능한 모델 설계와 최적화에 주력하고 있습니다.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 p-6 rounded-2xl border-l-4 border-emerald-400">
              <p className="text-gray-700 leading-relaxed">
                연구뿐만 아니라 실무 경험을 토대로, 다양한 산업 도메인에서 <strong className="text-emerald-600">AI 솔루션을 기획하고 구현하는 것</strong>을 목표로 합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
