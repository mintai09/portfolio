export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/assets/bg.png')" }}
      id="home"
    >
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* 왼쪽 텍스트 */}
        <div className="text-white max-w-xl text-center md:text-left">
          <button className="bg-teal-500 px-4 py-2 rounded-full text-sm mb-4">
            Hello I'm
          </button>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Mintai Kim
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4">
            AI Researcher
          </h2>
          <ul className="text-sm space-y-2">
            <li>📧 mintai09@gmail.com</li>
            <li>📱 +82 10 7597 7501</li>
            <li>📍 CheonAn, South Korea</li>
          </ul>
          <div className="mt-4 flex justify-center md:justify-start space-x-4 text-xl">
            <a
              href="https://github.com/mintai09"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/mintai_nai/"
              target="_blank"
              rel="noopener noreferrer"
              title="instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://scholar.google.co.kr/citations?user=oE8MnboAAAAJ&hl=ko"
              target="_blank"
              rel="noopener noreferrer"
              title="Google Scholar"
            >
              <i className="fas fa-graduation-cap"></i>
            </a>
          </div>
        </div>

        {/* 오른쪽 이미지 */}
        <div className="md:mt-0">
          <div className="md:mt-0">
            <div className="mt-10 md:mt-0">
              <div className="rounded-full border-4 border-black p-0.5">
                <img
                  src="/assets/profile_2.jpg"
                  alt="profile"
                  className="w-96 h-96 rounded-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
