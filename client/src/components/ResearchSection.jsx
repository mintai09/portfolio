import React from "react";
import { researchPapers } from "../data/researchData";

export default function ResearchSection() {
  const grouped = {
    SCI: researchPapers.filter((p) => p.type === "SCI"),
    KCI: researchPapers.filter((p) => p.type === "KCI"),
    Conference: researchPapers.filter((p) => p.type === "Conference"),
    THESIS: researchPapers.filter((p) => p.type === "THESIS"),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden" id="research">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-200/20 rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4">
            📚 Research Publications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic contributions spanning multiple disciplines and research domains
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg">
              🎓
            </div>
            석사 학위 논문
            <div className="flex-1 h-px bg-gradient-to-r from-purple-300 to-transparent ml-4"></div>
          </h3>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {grouped.THESIS.map((paper) => (
              <PaperCard key={paper.id} paper={paper} type="THESIS" />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-lg">
              🔬
            </div>
            SCI 논문
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-300 to-transparent ml-4"></div>
          </h3>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {grouped.SCI.map((paper) => (
              <PaperCard key={paper.id} paper={paper} type="SCI" />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-lg">
              📗
            </div>
            KCI 논문
            <div className="flex-1 h-px bg-gradient-to-r from-blue-300 to-transparent ml-4"></div>
          </h3>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {grouped.KCI.map((paper) => (
              <PaperCard key={paper.id} paper={paper} type="KCI" />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-lg">
              📝
            </div>
            학술대회 발표
            <div className="flex-1 h-px bg-gradient-to-r from-orange-300 to-transparent ml-4"></div>
          </h3>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {grouped.Conference.map((paper) => (
              <PaperCard key={paper.id} paper={paper} type="Conference" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PaperCard({ paper, type }) {
  const typeColors = {
    THESIS: 'from-purple-500/10 to-purple-600/5 border-purple-200/50',
    SCI: 'from-emerald-500/10 to-emerald-600/5 border-emerald-200/50',
    KCI: 'from-blue-500/10 to-blue-600/5 border-blue-200/50',
    Conference: 'from-orange-500/10 to-orange-600/5 border-orange-200/50'
  };

  const linkColors = {
    THESIS: 'text-purple-600 hover:text-purple-700',
    SCI: 'text-emerald-600 hover:text-emerald-700',
    KCI: 'text-blue-600 hover:text-blue-700',
    Conference: 'text-orange-600 hover:text-orange-700'
  };

  return (
    <div className={`group relative bg-gradient-to-br ${typeColors[type]} backdrop-blur-sm border-2 ${typeColors[type].split(' ')[2]} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-3 text-gray-800 leading-tight group-hover:text-gray-900 transition-colors">
          {paper.title}
        </h3>
        
        <div className="mb-4 space-y-2">
          <p className="text-sm font-medium text-gray-700 leading-relaxed">{paper.authors}</p>
          <p className="text-sm text-gray-600 italic font-medium">
            {paper.journal} ({paper.year})
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {paper.doi && (
            <a
              href={paper.doi}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${linkColors[type]} bg-white/60 hover:bg-white/80 border border-current/20 font-medium text-sm transition-all duration-200 transform hover:scale-105 shadow-sm`}
            >
              <span className="text-base">📄</span>
              DOI
            </a>
          )}
          {paper.link && (
            <a
              href={paper.link}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${linkColors[type]} bg-white/60 hover:bg-white/80 border border-current/20 font-medium text-sm transition-all duration-200 transform hover:scale-105 shadow-sm`}
            >
              <span className="text-base">🔗</span>
              LINK
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
