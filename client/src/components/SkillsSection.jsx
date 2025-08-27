import React from "react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-slate-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-zinc-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gray-200/30 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-700 via-gray-700 to-zinc-700 bg-clip-text text-transparent mb-4">
            🛠️ Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise in modern AI and software development technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-gray-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming */}
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                💻
              </div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Programming</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200/50">
                <i className="fab fa-python text-2xl text-yellow-600"></i>
                <span className="font-semibold text-gray-700">Python</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                <i className="fas fa-code text-2xl text-blue-600"></i>
                <span className="font-semibold text-gray-700">C, JavaScript</span>
              </div>
            </div>
          </div>

          {/* Deep Learning */}
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                🧠
              </div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">Deep Learning</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                <i className="fas fa-brain text-2xl text-purple-600"></i>
                <span className="font-semibold text-gray-700 text-sm">PyTorch, TensorFlow</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200/50">
                <i className="fas fa-eye text-2xl text-pink-600"></i>
                <span className="font-semibold text-gray-700 text-sm">OpenCV, Matplotlib</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                <i className="fas fa-robot text-2xl text-indigo-600"></i>
                <span className="font-semibold text-gray-700 text-sm">Huggingface</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                ⚙️
              </div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">Tools</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200/50">
                <i className="fas fa-laptop-code text-2xl text-emerald-600"></i>
                <span className="font-semibold text-gray-700 text-sm">Jupyter, Colab</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200/50">
                <i className="fas fa-code-branch text-2xl text-teal-600"></i>
                <span className="font-semibold text-gray-700 text-sm">Git, Docker, VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
