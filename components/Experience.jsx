const roles = [
  { period: "Jul 2025 — Jun 2026", role: "Software Developer", company: "Techouts", summary: "Built reusable React and TypeScript components for the Tata Neu design system and delivered production ecommerce features across Croma and Tata Neu.", highlights: ["Configuration-driven architecture", "Sanity CMS integrations", "Accessibility & cross-device UI"] },
  { period: "Sep 2021 — Apr 2025", role: "Software Engineer", company: "Estuate Software Pvt. Ltd.", summary: "Delivered scalable frontend solutions for Zuora, Callaway, and an employee management platform, with REST integrations, testing, and performance optimization.", highlights: ["Reusable Storybook components", "Jest & React Testing Library", "Internationalization & security"] },
];
const Experience = () => (
  <section id="experience" className="section section-dark"><div className="site-container">
    <div className="section-heading split-heading"><div><p className="section-kicker">02 / Experience</p><h2>Built for real-world <em>complexity.</em></h2></div><p>Enterprise work across ecommerce, accounts receivable, order management, and internal operations.</p></div>
    <div className="timeline">{roles.map((item, index) => <article className="timeline-row" key={item.company}><div className="timeline-index">0{index + 1}</div><div className="timeline-period">{item.period}</div><div className="timeline-content"><h3>{item.role}</h3><p className="company">{item.company} · Bengaluru</p><p>{item.summary}</p><div className="tag-list">{item.highlights.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
  </div></section>
);
export default Experience;
