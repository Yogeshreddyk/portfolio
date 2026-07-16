import Image from "next/image";

const projects = [
  { title: "Amma Agro Agencies", type: "Business website", description: "A responsive, SEO-conscious product showcase for a local agricultural business, built with a clean information architecture and mobile-first experience.", tags: ["Next.js", "Tailwind CSS", "SEO"], image: "/AAA.jpg", link: "https://agro-agencies.vercel.app/", github: "https://github.com/Yogeshreddyk/Agro-Agencies" },
  { title: "Food Delivery App", type: "Consumer application", description: "A responsive React food discovery experience integrating Swiggy's live API, with centralized state, routing, tested components, and real-time restaurant data.", tags: ["React", "Redux", "Jest"], image: "/Food_application.jpg", link: "https://food-application-yogeshreddyks-projects.vercel.app/", github: "https://github.com/Yogeshreddyk/food-application" },
  { title: "YouTube Clone", type: "Video platform", description: "A video browsing interface with infinite scroll, lazy loading, responsive layouts, and predictable client-side state management.", tags: ["React", "Redux", "Web APIs"], image: "/Youtube.jpg", link: "https://you-tube-hazel.vercel.app/", github: "https://github.com/Yogeshreddyk/You-tube" },
];

const Projects = () => <section id="projects" className="section section-projects"><div className="site-container">
  <div className="section-heading split-heading"><div><p className="section-kicker">04 / Selected projects</p><h2>Ideas, built and <em>shipped.</em></h2></div><p>Personal builds where I explore product thinking, API integration, performance, and responsive UI.</p></div>
  <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}>
    <a href={project.link} target="_blank" rel="noreferrer" className="project-image"><Image src={project.image} alt={`${project.title} interface`} fill sizes="(max-width: 800px) 100vw, 33vw" /><span>View live ↗</span></a>
    <div className="project-body"><div className="project-meta"><span>0{index + 1}</span><span>{project.type}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}>GitHub ↗</a></div></div>
  </article>)}</div>
  <div className="client-work"><span>Enterprise project experience</span><div>{["Croma", "Tata Neu", "Zuora", "Callaway", "EMS Portal"].map((name) => <strong key={name}>{name}</strong>)}</div></div>
</div></section>;
export default Projects;
