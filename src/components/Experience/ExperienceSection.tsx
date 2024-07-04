import React from 'react';
import {motion} from "framer-motion";

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <section id="Experiences" className='pt-24 md:pt-52 pb-10'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-2xl font-bold mb-8 text-center text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <div className="relative wrap overflow-hidden">
          <div className="border-2-2 absolute border-opacity-20 border-gray-300 h-full border left-1/2 hidden md:block"></div>
          {items.map((item, index) => (
            <div 
              key={item.id}
              className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="order-1 md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-purple-500 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{item.id}</h1>
              </div>
              <motion.div 
                className="order-1 bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 transition-all duration-300 ease-in-out hover:shadow-purple-500/50 hover:-translate-y-1"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-bold text-gray-100 text-lg sm:text-xl mb-1">{item.title}</h3>
                <h4 className="text-purple-400 text-xs sm:text-sm mb-2">{item.company}</h4>
                <p className="text-xs sm:text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">{item.description}</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-2">{item.date}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example usage
const ExperienceTimeline: React.FC = () => {
  const experienceItems: TimelineItem[] = [
    {
      id: 1,
      date: "2023 - Present",
      title: "Research Software Engineer Intern",
      company: "Vanderbilt Institute for Software Integrated Systems",
      description: "Contributing the development of intelligent cyber security solutions, and implementing CI/CD pipelines."
    },
    {
      id: 2,
      date: "2022 - 2024",
      title: "Master Student in Computer Science",
      company: "Vanderbilt University",
      description: "Developed and horned skills in software development, cloud computing, and cyber security."
    },
    {
      id: 3,
      date: "2020 - 2022",
      title: "Research Assistant",
      company: "CFDA Lab, Academia Sinica",
      description: "Assisted in the development of recommendation systems and IR & NLP research."
    },
    // Add more items as needed
  ];

  return <Timeline items={experienceItems} />;
};

export default ExperienceTimeline;