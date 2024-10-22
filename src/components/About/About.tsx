import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";


function imageLoader({ src }: { src: string }) {
    return `${src}`; // REPLACE WITH YOUR IMAGE DIRECTORY
}

const AboutMe = () => {
    return (
        <section id="AboutMe" className="relative overflow-hidden bg-zinc-950 pt-16 md:pt-52 md:pb-10 md:px-16 lg:px-24 flex flex-col justify-center">
            <Card >
                <CardHeader>
                  <motion.h2
                    className="text-4xl 
                    sm:text-2xl md:text-3xl lg:text-4xl 
                    font-bold text-gray-100 mb-6 text-center md:text-left"
                  >
                    More About Me <span className="text-slate-500">🚀</span>
                  </motion.h2>
                </CardHeader>
                  <CardDescription>
                  <motion.div 
                    className="col-span-12 md:col-span-8 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >   
                    {/* <p className="mb-4 text-sm sm:text-base leading-relaxed text-zinc-400 text-justify sm:text-left">
                    Hello, I am a research software engineer intern at <span className="text-slate-500"><a href="https://www.isis.vanderbilt.edu/projects/scalable-cyber-physical-simulation-automated-cyber-agent-training" target="_blank" rel="noopener noreferrer">Institute for Software Integrated Systems, Vanderbilt University</a></span>. I recently graduated with a Master of Science in Computer Science degree from Vanderbilt University.
                    </p>
                    <p className="mb-4 text-sm sm:text-base leading-relaxed text-zinc-400 text-justify sm:text-left">
                    With a fervent interest in leveraging technology to solve complex problems, particularly within the realms of <span className="text-slate-500">backend software development</span>, <span className="text-slate-500">cloud computing</span>, and <span className="text-slate-500">cyber security</span>, I have been involved in various research projects and internships.
                    </p>
                    <p className="mb-4 text-sm sm:text-base leading-relaxed text-zinc-400 text-justify sm:text-left">
                    I have experience in developing web applications, cloud-native applications, and data-driven applications. I am proficient in programming languages such as <span className="text-slate-500">Python</span>, <span className="text-slate-500">JavaScript</span>, and <span className="text-slate-500">Java</span>.
                    </p>
                    <p className="mb-4 text-sm sm:text-base leading-relaxed text-zinc-400 text-justify sm:text-left">
                    I have experience working with <span className="text-slate-500">ReactJS</span>, <span className="text-slate-500">NodeJS</span>, <span className="text-slate-500">FastAPI</span>, <span className="text-slate-500">Flask</span>, <span className="text-slate-500">AWS</span>, <span className="text-slate-500">Docker</span>, <span className="text-slate-500">Kubernetes</span>, <span className="text-slate-500">PostgreSQL</span>, <span className="text-slate-500">MongoDB</span>, and <span className="text-slate-500">Redis</span>.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-400 text-justify sm:text-left">
                    Passionate about building data-driven applications, I am looking for opportunities in the industry to apply my skills and knowledge. In my free time, I work on side projects to further my skills. Cheers! 🍻
                    </p> */}
                    My journey has been marked by a passion for cybersecurity and cloud computing. Our team developed an end-to-end solution at the Institute for Software Integrated Systems, which significantly enhanced the CybORG platform's capabilities by integrating it with Mininet. This innovation allows for realistic network environment simulations without the resource intensity of a network cluster.
                    My technical proficiency is grounded in my experience at Academia Sinica, where we conceptualized advanced recommendation systems for E-Sun Bank. Leveraging my skills in FastAPI, Django REST Framework, and SwiftUI, I'm committed to delivering robust software services that address complex challenges and drive technological progress.
                    Cheers, 🥂
                </motion.div>
                  </CardDescription>
            </Card>
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
                            src="/images/profile.jpeg"
                            alt="Profile Picture"
                            width={300}
                            height={300}
                            className="rounded-lg"
                            loader={imageLoader}
                        />
                    </motion.div>
                </div>
             </div>
            
            {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <motion.div 
                    className="col-span-12 md:col-span-8 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >   
                    <p className="mb-4 text-sm sm:text-base leading-relaxed text-zinc-400 text-justify sm:text-left">
                    Hello, I am a research software engineer intern at <span className="text-slate-500"><a href="https://www.isis.vanderbilt.edu/projects/scalable-cyber-physical-simulation-automated-cyber-agent-training" target="_blank" rel="noopener noreferrer">Institute for Software Integrated Systems, Vanderbilt University</a></span>. I recently graduated with a Master of Science in Computer Science degree from Vanderbilt University.
                    </p>
                    <p className="mb-4 text-sm sm:text-base leading-relaxed text-zinc-400 text-justify sm:text-left">
                    With a fervent interest in leveraging technology to solve complex problems, particularly within the realms of <span className="text-slate-500">backend software development</span>, <span className="text-slate-500">cloud computing</span>, and <span className="text-slate-500">cyber security</span>, I have been involved in various research projects and internships.
                    </p>
                    <p className="mb-4 text-sm sm:text-base leading-relaxed text-zinc-400 text-justify sm:text-left">
                    I have experience in developing web applications, cloud-native applications, and data-driven applications. I am proficient in programming languages such as <span className="text-slate-500">Python</span>, <span className="text-slate-500">JavaScript</span>, and <span className="text-slate-500">Java</span>.
                    </p>
                    <p className="mb-4 text-sm sm:text-base leading-relaxed text-zinc-400 text-justify sm:text-left">
                    I have experience working with <span className="text-slate-500">ReactJS</span>, <span className="text-slate-500">NodeJS</span>, <span className="text-slate-500">FastAPI</span>, <span className="text-slate-500">Flask</span>, <span className="text-slate-500">AWS</span>, <span className="text-slate-500">Docker</span>, <span className="text-slate-500">Kubernetes</span>, <span className="text-slate-500">PostgreSQL</span>, <span className="text-slate-500">MongoDB</span>, and <span className="text-slate-500">Redis</span>.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-400 text-justify sm:text-left">
                    Passionate about building data-driven applications, I am looking for opportunities in the industry to apply my skills and knowledge. In my free time, I work on side projects to further my skills. Cheers! 🍻
                    </p>
                    My journey has been marked by a passion for cybersecurity and cloud computing. Our team developed an end-to-end solution at the Institute for Software Integrated Systems, which significantly enhanced the CybORG platform's capabilities by integrating it with Mininet. This innovation allows for realistic network environment simulations without the resource intensity of a network cluster.
                    My technical proficiency is grounded in my experience at Academia Sinica, where we conceptualized advanced recommendation systems for E-Sun Bank. Leveraging my skills in FastAPI, Django REST Framework, and SwiftUI, I'm committed to delivering robust software services that address complex challenges and drive technological progress.
                    Cheers, 🥂
                </motion.div>
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
                                src="/images/profile.jpeg"
                                alt="Profile Picture"
                                width={300}
                                height={300}
                                className="rounded-lg"
                                loader={imageLoader}
                            />
                        </motion.div>
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default AboutMe;
