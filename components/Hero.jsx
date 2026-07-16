import Image from "next/image";

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-glow hero-glow-one" />
    <div className="hero-glow hero-glow-two" />
    <div className="site-container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Frontend Engineer · Bengaluru</p>
        <h1>I build ecommerce experiences that stay <em>fast at scale.</em></h1>
        <p className="hero-lead">I&apos;m Yogesh, a frontend engineer with around 5 years of experience shipping accessible, production-ready React and Next.js products for high-traffic platforms including Tata Neu and Croma.</p>
        <div className="hero-actions">
          <a href="#experience" className="button button-primary">Explore my work <span>↘</span></a>
          <a href="/Yogesh_React_5_Years_Resume_July_2026.pdf" download className="button button-secondary">Download résumé</a>
        </div>
        <div className="hero-stats" aria-label="Career highlights">
          <div><strong>~5</strong><span>Years experience</span></div><div><strong>5</strong><span>Enterprise products</span></div><div><strong>4</strong><span>Languages supported</span></div>
        </div>
      </div>
      <div className="portrait-wrap" aria-label="Portrait of K Yogesh Reddy">
        <div className="portrait-card"><Image src="/IMG_20240518_080653_935.jpg" alt="K Yogesh Reddy" fill priority sizes="(max-width: 768px) 80vw, 420px" /><div className="portrait-shade" /><div className="portrait-caption"><span>Currently focused on</span><strong>Scalable design systems</strong></div></div>
        <div className="floating-chip chip-react">React.js</div><div className="floating-chip chip-cms">Sanity CMS</div>
      </div>
    </div>
  </section>
);
export default Hero;
