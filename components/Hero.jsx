const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-accent">K Yogesh Reddy</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">React.js Developer</h2>
            <p className="text-lg mb-8 max-w-lg">
              Results-driven Software Engineer with 3.7 years of experience in
              designing, developing, and maintaining complex software solutions.
              Proficient in frontend development. Adept at collaborating in
              agile environments to deliver high-quality software products.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-accent px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition"
              >
                Contact Me
              </a>
              <a
                href="/Yogesh_reddy_ReactJS_April_Resume.pdf"
                download="Yogesh_reddy_Resume.pdf"
                className="border border-accent px-6 py-3 rounded-lg font-medium hover:bg-secondary transition flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
