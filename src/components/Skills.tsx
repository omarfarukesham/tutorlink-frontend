'use client';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiFirebase } from 'react-icons/si';
const skills = [
  { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-gray-800 dark:text-white" /> },
  { name: 'React.js', icon: <FaReact className="text-4xl text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-700" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-4xl text-yellow-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-teal-400" /> },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="bg-cover bg-center"
    >
     
        <div className="w-full bg-gray-300 mx-auto p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-black mb-8">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default SkillsSection;
