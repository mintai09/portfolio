import React from "react";
import { awards } from "../data/award";
export default function AwardsSection() {
  return (
    <section id="awards" className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-red-200/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            🏅 Awards & Media
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition and achievements in AI research and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {awards.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-white/50 rounded-3xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Award badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                  🏆
                </div>
              </div>
              
              <div className="p-6 flex flex-col justify-between flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent mb-2 group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-sm font-medium">{item.subtitle}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span className="text-sm font-medium">{item.year}</span>
                  </div>
                </div>
                
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group-hover:animate-pulse"
                >
                  <span>📰</span>
                  기사 링크 보기
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))
        </div>
      </div>
    </section>
  );
}
