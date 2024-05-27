import React, { Dispatch, SetStateAction, useState } from "react";
import {motion} from "framer-motion";
import Image from "next/image";

const AboutMe: React.FC = () => {
    return (
        <section id="AboutMe" className="relative overflow-hidden bg-blend-color-dodge p-8">
            <div className="grid grid-cols-6 md:grid-cols-12 items-center gap-4">
                <motion.h1
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.25, ease: "easeInOut" }}
                    className="text-4xl font-bold text-gray-100 mb-6"
                >
                    About Me
                </motion.h1>
                <div className="col-span-6 md:col-span-8">
                    <motion.p
                        initial={{ y: 25, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
                        className="mb-9 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-lg md:leading-relaxed"
                    >
                        Hello, I am a research software engineer at
                        <span className={"text-sky-500"}>
                            <a href={"https://www.isis.vanderbilt.edu/projects/scalable-cyber-physical-simulation-automated-cyber-agent-training"} target={"_blank"} rel={"noreferrer"}>
                                Institute for Software Integrated Systems, Vanderbilt University
                            </a>
                        </span>.
                        With a fervent interest in leveraging technology to solve complex problems, particularly within the realms of cloud computing, cyber security, and artificial intelligence, I am passionate about De
                    </motion.p>
                </div>
                <div className="relative col-span-6 md:col-span-4 w-full h-64 md:h-auto">
                    <motion.p
                        initial={{ y: 25, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
                        className="mb-9 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-lg md:leading-relaxed"
                    >
                        <Image
                            src="/images/test_images1.png"
                            alt="Profile Picture"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                    </motion.p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;