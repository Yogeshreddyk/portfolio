import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return <div><Head><title>K Yogesh Reddy | Frontend Engineer</title><meta name="description" content="Frontend engineer with around 5 years of experience building scalable ecommerce products with React, TypeScript, Next.js, and Sanity CMS." /><meta name="viewport" content="width=device-width, initial-scale=1" /></Head><Header /><main><Hero /><About /><Experience /><Skills /><Projects /><Contact /></main><Footer /></div>;
}
