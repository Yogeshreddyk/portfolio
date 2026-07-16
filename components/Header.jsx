import { useState } from "react";
import Link from "next/link";
const links = ["About", "Experience", "Skills", "Projects", "Contact"];
const Header = () => {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="site-container header-inner">
    <Link href="/#home" className="brand" aria-label="Yogesh Reddy home">YR<span>.</span></Link>
    <nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">{links.map((link) => <Link key={link} href={`/#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</Link>)}</nav>
    <a className="header-cta" href="mailto:reddykyogesh@gmail.com">Let&apos;s talk <span>↗</span></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span /><span /></button>
  </div></header>;
};
export default Header;
