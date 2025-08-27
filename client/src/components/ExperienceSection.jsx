export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      organization: "Sangmyung University",
      role: "B.A. Researcher",
      period: "Mar 2018 – Feb 2022",
      description: [
        "임상 유전체, 임상시험 빅데이터 기반 암 진단 및 치료 지원 전문가 서비스 연구",
        "라이프로그 및 임상 데이터를 활용한 딥러닝 모델 연구",
        "임상 전문용어 기반 자연어처리(NLP) 시스템 설계 및 실험",
        "소리 데이터를 활용한 변압기 고장 진단 모델 개발",
        "SCI급 논문 1편 제1저자 게재",
      ],
    },
    {
      id: 2,
      organization: "Sangmyung University",
      role: "M.S. Researcher",
      period: "Mar 2022 – Jun 2024",
      description: [
        "초거대 AI 기반 완전 무인 드라이브 스루 로봇 카페 시스템 개발 연구",
        "LLM과 음성 인식을 활용한 주문 시스템 설계 및 연구 수행",
        "시계열 데이터를 이용한 건물 자연환기량 예측 모델 개발",
        "SCI급 논문 3편 저자 참여",
      ],
    },
    {
      id: 3,
      organization: "AI StartUP Synerin",
      role: "AI Researcher",
      period: "Jun 2024 – Nov 2024",
      description: [
        "의학 지식과 LLM을 융합한 질의응답 시스템 연구",
        "비전 기반 디지털 헬스케어 임베디드 모델 개발",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white" id="experiences">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center gap-2 text-gray-800">
          💼 Experiences
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 왼쪽: 경험 */}
          <div className="space-y-14 border-l-2 border-teal-400 pl-6 relative">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="absolute -left-3 top-2 w-3 h-3 bg-teal-400 rounded-full border-2 border-white shadow" />
                <h3 className="text-2xl font-semibold text-teal-600 mb-1">
                  {exp.organization}
                </h3>
                <p className="text-sm text-gray-500 italic mb-3">
                  {exp.role} ・ {exp.period}
                </p>
                <ul className="list-disc list-inside text-base text-gray-800 leading-relaxed space-y-2">
                  {exp.description.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 오른쪽: 요약 + 수상 + 이미지 */}
          <div className="space-y-6">
            {/* 연구 성과 통계 카드 - 그라디언트 배경 */}
            <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-teal-500 p-6 rounded-xl shadow-lg text-white relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  📊 연구 성과 통계
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center hover:scale-110 transition-transform duration-200">
                    <div className="text-3xl font-bold">6+</div>
                    <div className="text-sm opacity-90">연구 경력(년)</div>
                  </div>
                  <div className="text-center hover:scale-110 transition-transform duration-200">
                    <div className="text-3xl font-bold">6</div>
                    <div className="text-sm opacity-90">R&D 과제</div>
                  </div>
                  <div className="text-center hover:scale-110 transition-transform duration-200">
                    <div className="text-3xl font-bold">4</div>
                    <div className="text-sm opacity-90">SCI 논문</div>
                  </div>
                  <div className="text-center hover:scale-110 transition-transform duration-200">
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-sm opacity-90">학회 논문</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 핵심 기술 스택 카드 */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl shadow-md border border-emerald-200 hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-emerald-800 flex items-center gap-2">
                🚀 핵심 기술 스택
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center group">
                  <span className="font-medium text-gray-700 group-hover:text-emerald-700 transition-colors">Large Language Models</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full transition-all duration-1000 group-hover:bg-emerald-600" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="font-medium text-gray-700 group-hover:text-emerald-700 transition-colors">Computer Vision</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full transition-all duration-1000 group-hover:bg-emerald-600" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="font-medium text-gray-700 group-hover:text-emerald-700 transition-colors">Time-Series Analysis</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full transition-all duration-1000 group-hover:bg-emerald-600" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="font-medium text-gray-700 group-hover:text-emerald-700 transition-colors">Healthcare AI</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full transition-all duration-1000 group-hover:bg-emerald-600" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 수상 이력 카드 - 황금 테마 */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl shadow-md border border-amber-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-amber-800 flex items-center gap-2">
                🏆 주요 수상 이력
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-800">서울시장상</div>
                    <div className="text-sm text-gray-600">SeSSac 해커톤 대회</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-800">우수상</div>
                    <div className="text-sm text-gray-600">POSTECH 시계열 예측 대회</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-800">우수 논문상</div>
                    <div className="text-sm text-gray-600">정보과학회</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 연구 분야 및 적용 사례 카드 */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl shadow-md border border-indigo-200 hover:shadow-lg hover:border-indigo-300 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-indigo-800 flex items-center gap-2">
                📑 연구 분야 & 실제 적용
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-semibold text-gray-800 mb-2">🔬 연구 분야</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 hover:scale-105 transition-all duration-200 cursor-default">소리 인식</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 hover:scale-105 transition-all duration-200 cursor-default">시계열 예측</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 hover:scale-105 transition-all duration-200 cursor-default">의료 딥러닝</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 hover:scale-105 transition-all duration-200 cursor-default">자연어처리</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-semibold text-gray-800 mb-2">💡 실제 적용 사례</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="hover:text-indigo-600 transition-colors duration-200">• 무인 드라이브 스루 음성 주문 시스템</li>
                    <li className="hover:text-indigo-600 transition-colors duration-200">• 건물 자연환기량 시계열 예측 모델</li>
                    <li className="hover:text-indigo-600 transition-colors duration-200">• 의학 지식 기반 LLM 질의응답 시스템</li>
                    <li className="hover:text-indigo-600 transition-colors duration-200">• 비전 기반 디지털 헬스케어 시스템</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
