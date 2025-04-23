import { FaJs, FaReact, FaCss3Alt, FaHtml5, FaBootstrap } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiTypescript,
  SiReactquery,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-accent">Skills</span>
        </h2>

        <div className="border-2 border-gray-600 rounded-lg p-8 shadow-md max-w-5xl mx-auto bg-secondary">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <div className="flex items-center space-x-3 text-lg font-semibold">
              <FaJs className="text-yellow-500 text-3xl" />
              <span>JavaScript</span>
            </div>

            <div className="flex items-center space-x-3 text-lg font-semibold">
              <FaReact className="text-blue-500 text-3xl" />
              <span>React</span>
            </div>

            <div className="flex items-center space-x-3 text-lg font-semibold">
              <SiNextdotjs className="text-white text-3xl" />
              <span>Next.js</span>
            </div>

            <div className="flex items-center space-x-3 text-lg font-semibold">
              <FaCss3Alt className="text-blue-700 text-3xl" />
              <span>CSS3</span>
            </div>

            <div className="flex items-center space-x-3 text-lg font-semibold">
              <FaHtml5 className="text-orange-500 text-3xl" />
              <span>HTML5</span>
            </div>

            <div className="flex items-center space-x-3 text-lg font-semibold">
              <FaBootstrap className="text-indigo-500 text-3xl" />
              <span>Bootstrap</span>
            </div>

            <div className="flex items-center space-x-3 text-lg font-semibold">
              <SiTailwindcss className="text-cyan-400 text-3xl" />
              <span>Tailwind CSS</span>
            </div>

            <div className="flex items-center space-x-3 text-lg font-semibold">
              <SiRedux className="text-purple-500 text-3xl" />
              <span>Redux</span>
            </div>

            <div className="flex items-center space-x-3 text-lg font-semibold">
              <SiMui className="text-blue-400 text-3xl" />
              <span>Material UI</span>
            </div>

            <div className="flex items-center space-x-3 text-lg font-semibold">
              <SiTypescript className="text-blue-600 text-3xl" />
              <span>TypeScript</span>
            </div>

            <div className="flex items-center space-x-3 text-lg font-semibold">
              <SiReactquery className="text-red-500 text-3xl" />
              <span>React Query</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
