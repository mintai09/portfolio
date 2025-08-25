import React from "react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          🛠️ Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Programming */}
          <div>
            <h3 className="text-lg font-semibold mb-2">💻 Programming</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>
                <i className="fab fa-python text-yellow-500 mr-2"></i>
                Python
              </li>
              <li>
                <i className="fas fa-code text-blue-600 mr-2"></i>
                C, JavaScript
              </li>
            </ul>
          </div>

          {/* Deep Learning */}
          <div>
            <h3 className="text-lg font-semibold mb-2">🧠 Deep Learning</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>
                <i className="fas fa-brain text-purple-500 mr-2"></i>
                PyTorch, TensorFlow, Scikit-learn
              </li>
              <li>
                <i className="fas fa-eye text-pink-500 mr-2"></i>
                Open CV, Matplotlib
              </li>
              <li>
                <i className="fas fa-robot text-indigo-500 mr-2"></i>
                Huggingface Transformers
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-2">⚙️ Tools</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>
                <i className="fas fa-laptop-code text-green-600 mr-2"></i>
                Jupyter / Colab / Git / Docker
              </li>
              <li>
                <i className="fas fa-code-branch text-gray-700 mr-2"></i>
                VS Code
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
