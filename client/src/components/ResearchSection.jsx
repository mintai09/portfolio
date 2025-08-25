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
    <section className="py-16 bg-gray-100" id="research">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">📚 Research</h2>

        <h3 className="text-xl font-bold mb-4">🎓 석사 학위 논문</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {grouped.THESIS.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>

        {/* SCI */}
        <h3 className="text-xl font-bold mb-4">🔬 SCI 논문</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {grouped.SCI.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>

        {/* KCI */}
        <h3 className="text-xl font-bold mb-4">📗 KCI 논문</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {grouped.KCI.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>

        {/* Conference */}
        <h3 className="text-xl font-bold mb-4">📝 학술대회 발표</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {grouped.Conference.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PaperCard({ paper }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <h3 className="text-lg font-semibold mb-1">{paper.title}</h3>
      <p className="text-sm text-gray-600">{paper.authors}</p>
      <p className="text-sm text-gray-500 italic">
        {paper.journal} ({paper.year})
      </p>
      <div className="mt-3 flex flex-wrap gap-3 text-sm">
        {paper.doi && (
          <a
            href={paper.doi}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            📄 DOI
          </a>
        )}
        {paper.link && (
          <a
            href={paper.link}
            target="_blank"
            rel="noreferrer"
            className="text-green-600 underline"
          >
            📄 LINK
          </a>
        )}
      </div>
    </div>
  );
}
