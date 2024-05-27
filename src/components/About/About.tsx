import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutMe = () => {
    return (
        <section id="AboutMe" className="relative overflow-hidden bg-zinc-950 py-8 px-4 md:px-16 lg:px-24 min-h-screen flex flex-col justify-center">
            <motion.h1
                className="text-4xl font-bold text-gray-100 mb-6 text-center md:text-left"
            >
                About Me
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="col-span-12 md:col-span-8 flex justify-center md:justify-start">
                    <motion.p className="mb-9 text-base leading-relaxed text-zinc-400 sm:text-lg md:text-lg md:leading-relaxed text-center md:text-left">
                        Hello, I am a research software engineer intern at <span className="text-slate-500"><a href="https://www.isis.vanderbilt.edu/projects/scalable-cyber-physical-simulation-automated-cyber-agent-training" target="_blank">Institute for Software Integrated Systems, Vanderbilt University</a></span>. I recently graduated with a Master of Science in Computer Science degree from Vanderbilt University.
                        With a fervent interest in leveraging technology to solve complex problems, particularly within the realms of <span className="text-slate-500">cloud computing</span>, <span className="text-slate-500">cyber security</span>, and <span className="text-slate-500">data science</span>, I have been involved in various research projects and internships.
                        I have experience in developing web applications, cloud-native applications, and data-driven applications. I am proficient in programming languages such as <span className="text-slate-500">Python</span>, <span className="text-slate-500">JavaScript</span>, and <span className="text-slate-500">Java</span>. I have experience working with <span className="text-slate-500">ReactJS</span>, <span className="text-slate-500">NodeJS</span>, <span className="text-slate-500">FastAPI</span>, <span className="text-slate-500">Flask</span>, <span className="text-slate-500">AWS</span>, <span className="text-slate-500">Docker</span>, <span className="text-slate-500">Kubernetes</span>, <span className="text-slate-500">PostgreSQL</span>, <span className="text-slate-500">MongoDB</span>, and <span className="text-slate-500">Redis</span>.
                        I am also familiar with <span className="text-slate-500">CI/CD</span> pipelines, <span className="text-slate-500">DevOps</span> practices, and <span className="text-slate-500">Agile</span> methodologies. Passionate about building
                        and developing data-driven applications, I am looking for opportunities in the industry to apply my skills and knowledge.
                        Cheers! 🍻
                    </motion.p>
                </div>
                <div className="col-span-12 md:col-span-4 flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-full md:h-full overflow-hidden rounded-lg shadow-lg">
                        <motion.div
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'easeInOut' }}
                            whileHover={{ scale: 1.1 }}
                            className="w-full h-full transition-transform duration-300 ease-in-out"
                        >
                            <Image
                                src="/images/test_images1.png"
                                alt="Profile Picture"
                                width={300}
                                height={300}
                                className="rounded-lg"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
