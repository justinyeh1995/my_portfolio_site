import React, { Dispatch, SetStateAction, useState } from "react";
import {motion} from "framer-motion";
import SharedLayout from "@/components/Shared/Layout/SharedLayout";
import Image from "next/image";

export const AboutMe: React.FC = () => {
    const [name, setName] = useState<string>("");

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
                        Hello, I'm Justin Yeh (Mandarin Name: 葉致廷 Yè Zhìtíng), a Master’s student in Computer Science at Vanderbilt University
                        with a fervent interest in leveraging technology to solve complex problems, particularly within the realms of cybersecurity
                        and data-driven applications.
                        Check out some projects that I've done.
                        Cheers! 🍻
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
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                    </motion.p>
                </div>
            </div>
        </section>
    );
}