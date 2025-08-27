export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center relative overflow-hidden"
      style={{ backgroundImage: "url('/portfolio/assets/bg.png')" }}
      id="home"
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Enhanced left content */}
        <div className="text-white max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-3 rounded-full text-sm mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <span className="animate-wave">👋</span>
            <span className="font-medium">Hello, I'm</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent animate-fade-in-up">
            Mintai Kim
          </h1>
          
          <h2 className="text-xl sm:text-3xl md:text-4xl mb-8 text-teal-300 font-light animate-fade-in-up delay-200">
            AI Researcher & Engineer
          </h2>
          <div className="space-y-4 mb-8 animate-fade-in-up delay-300">
            <div className="flex items-center justify-center md:justify-start gap-3 text-white/90 hover:text-white transition-colors">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-white/20">
                📧
              </div>
              <span className="font-medium">mintai09@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 text-white/90 hover:text-white transition-colors">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-white/20">
                📱
              </div>
              <span className="font-medium">+82 10 7597 7501</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 text-white/90 hover:text-white transition-colors">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-white/20">
                📍
              </div>
              <span className="font-medium">CheonAn, South Korea</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-start space-x-6 animate-fade-in-up delay-400">
            <a
              href="https://github.com/mintai09"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
              className="group w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <i className="fab fa-github text-xl text-white/80 group-hover:text-white transition-colors"></i>
            </a>
            <a
              href="https://www.instagram.com/mintai_nai/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="group w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-pink-400/30 hover:border-pink-400/50 hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <i className="fab fa-instagram text-xl text-white/80 group-hover:text-white transition-colors"></i>
            </a>
            <a
              href="https://scholar.google.co.kr/citations?user=oE8MnboAAAAJ&hl=ko"
              target="_blank"
              rel="noopener noreferrer"
              title="Google Scholar"
              className="group w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center border border-blue-400/30 hover:border-blue-400/50 hover:from-blue-500/30 hover:to-indigo-500/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <i className="fas fa-graduation-cap text-xl text-white/80 group-hover:text-white transition-colors"></i>
            </a>
          </div>
        </div>

        {/* Enhanced right image */}
        <div className="md:mt-0 animate-fade-in-up delay-500">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse"></div>
            
            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-teal-500 via-blue-500 to-purple-600 p-1 rounded-full">
              <div className="bg-black/20 backdrop-blur-sm p-2 rounded-full">
                <img
                  src="/portfolio/assets/profile_2.jpg"
                  alt="Mintai Kim - AI Researcher"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
