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
            {/* 요약 카드 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">💡 요약</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  총 연구 기간:{" "}
                  <span className="font-semibold text-gray-900">6년+</span>
                </li>
                <li>
                  참여 R&D 과제 수:{" "}
                  <span className="font-semibold text-gray-900">6</span>
                </li>
                <li>
                  대표 키워드:{" "}
                  <span className="text-indigo-600 font-medium">
                    LLM, Vision, Time-Series
                  </span>
                </li>
                <li>
                  실제 적용:{" "}
                  <span className="text-gray-900">
                    음성 주문 시스템, 시계열 예측, 헬스케어 시스템
                  </span>
                </li>
              </ul>
            </div>

            {/* 수상 카드 */}
            <div className="bg-white p-6 rounded-xl shadow border">
              <h3 className="text-xl font-bold mb-3 text-yellow-600">
                🏆 수상 이력
              </h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>서울시장상 수상 (SeSSac 해커톤)</li>
                <li>POSTECH 주최 시계열 예측 대회 우수상</li>
                <li>정보과학회 우수 논문상 수상</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border">
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                📑 논문 이력 요약
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  SCI 논문:{" "}
                  <span className="font-semibold text-gray-900">4편</span>
                </li>
                <li>
                  학회 논문:{" "}
                  <span className="font-semibold text-gray-900">10편+</span>
                </li>
                <li>
                  연도별 발표:{" "}
                  <span className="text-gray-900">2020 ~ 2025</span>
                </li>
                <li>
                  주요 분야:{" "}
                  <span className="text-indigo-600">
                    소리 인식, 시계열 예측, 의료 딥러닝
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
