import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-full bg-secondary shadow-lg z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-accent">
            K Yogesh Reddy
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-accent transition">
              About
            </Link>
            <Link href="#skills" className="hover:text-accent transition">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-accent transition">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-accent transition">
              Contact
            </Link>
          </nav>

          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
