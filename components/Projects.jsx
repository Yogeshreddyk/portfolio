import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured online store with cart functionality, user authentication, and payment processing.",
    tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    image: "/AAA.jpg",
    link: "https://agro-agencies.vercel.app/",
    github: "https://github.com/Yogeshreddyk/Agro-Agencies",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for organizing tasks with drag-and-drop functionality.",
    tags: ["React", "TypeScript", "Firebase", "Material UI"],
    image: "/Food_application.jpg",
    link: "https://food-application-yogeshreddyks-projects.vercel.app/",
    github: "https://github.com/Yogeshreddyk/food-application",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather information with 5-day forecast and location search.",
    tags: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    image: "/Youtube.jpg",
    link: "https://you-tube-hazel.vercel.app/",
    github: "https://github.com/Yogeshreddyk/You-tube",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-accent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col h-full"
            >
              {/* Image Container - Adjusted for full display */}
              <div className="w-full h-48 relative flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain" // Changed from object-cover to contain
                  style={{ backgroundColor: "#1e293b" }} // Optional: fallback bg
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Text Content - Made consistent height */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-accent bg-opacity-20 text-accent px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline flex items-center"
                  >
                    Live Demo
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline flex items-center"
                  >
                    GitHub
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="bg-accent px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition inline-flex items-center"
          >
            View All Projects
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
