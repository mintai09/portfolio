import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 text-gray-800">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow mb-12">
          <h3 className="text-xl font-semibold mb-2">
            👨‍🔬 석사 연구원 | 딥러닝 & AI 엔지니어
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            🎓 상명대학교 / 소프트웨어학석사
            <br />
            🛠️ 기술스택: Python, Tensorflow, PyTorch
            <br />
            🌍 관심 분야: LLM, Vision, 시계열 예측
            <br />
            🏆 수상 이력: 서울 시장상 수상, POSTECH 주최 시계열 예측 우수상
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            상명대학교 석사 연구원으로서 음성 인식, 시계열 예측, LLM 등의 다양한
            AI 기술을 연구하였으며, SCI 논문 4편, 학회 논문 10편을 발표한 경험이
            있습니다.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mt-2">
            특히{" "}
            <span className="font-medium text-indigo-600">
              음성 기반 주문 시스템, 자연환기량 예측, 의료 분야 LLM 응용
            </span>{" "}
            등에 관심이 있으며, 실제 환경에 적용 가능한 모델 설계와 최적화에
            주력하고 있습니다.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mt-2">
            연구뿐만 아니라 실무 경험을 토대로, 다양한 산업 도메인에서
            <span className="text-indigo-600 font-medium">
              {" "}
              AI 솔루션을 기획하고 구현하는 것
            </span>
            을 목표로 합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
