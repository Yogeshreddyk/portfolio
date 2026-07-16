import Head from "next/head";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return <div><Head><title>Projects | K Yogesh Reddy</title><meta name="description" content="Selected frontend projects by K Yogesh Reddy." /></Head><Header /><main className="projects-page"><Projects /><Contact /></main><Footer /></div>;
}
