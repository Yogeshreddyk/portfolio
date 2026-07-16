const groups = [
  { number: "01", title: "Core", skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SCSS"] },
  { number: "02", title: "Frontend", skills: ["React.js", "Next.js", "Redux", "React Router v7", "Context API"] },
  { number: "03", title: "UI & Quality", skills: ["Tailwind CSS", "Material UI", "Storybook", "Jest", "React Testing Library"] },
  { number: "04", title: "Platform", skills: ["Sanity.io", "REST APIs", "Docker", "Azure", "Vercel", "Git"] },
];
const Skills = () => <section id="skills" className="section section-light"><div className="site-container"><div className="section-heading"><p className="section-kicker">03 / Toolkit</p><h2>Tools I use to turn ideas into <em>reliable products.</em></h2></div><div className="skills-grid">{groups.map((group) => <article className="skill-group" key={group.title}><span>{group.number}</span><h3>{group.title}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div></div></section>;
export default Skills;
