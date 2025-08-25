import React from "react";
import { awards } from "../data/award";
export default function AwardsSection() {
  return (
    <section id="awards" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10">🏅 Awards & Media</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {awards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md hover:shadow-lg border rounded-lg overflow-hidden transition flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-bold text-teal-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.subtitle} · {item.year}
                  </p>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-500 hover:underline mt-2"
                >
                  기사 링크 보기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
