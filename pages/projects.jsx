import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Amma agro agencies",
    description:
      "A full-featured online store with cart functionality, user authentication, and payment processing.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    image: "/AAA.jpg",
    link: "https://agro-agencies.vercel.app/",
    github: "https://github.com/Yogeshreddyk/Agro-Agencies",
  },
  {
    id: 2,
    title: "Food application",
    description:
      "A productivity application for organizing tasks with drag-and-drop functionality.",
    tags: ["React", "TypeScript", "Firebase", "Material UI"],
    image: "/Food_application.jpg",
    link: "https://food-application-yogeshreddyks-projects.vercel.app/",
    github: "https://github.com/Yogeshreddyk/food-application",
  },
  {
    id: 3,
    title: "Youtube Clone",
    description:
      "Real-time weather information with 5-day forecast and location search.",
    tags: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    image: "/Youtube.jpg",
    link: "https://you-tube-hazel.vercel.app/",
    github: "https://github.com/Yogeshreddyk/You-tube",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Projects | Yogesh</title>
        <meta name="description" content="Projects by a React.js developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="pt-20 pb-12">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-12 text-center">
              My <span className="text-accent">Projects</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
                >
                  <div className="h-48 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
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
                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
