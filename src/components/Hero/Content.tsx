import React, {useEffect, useState} from "react";
import { useQuery } from 'react-query';
import {motion} from "framer-motion";
import {FaGithub, FaLinkedin, FaMailBulk} from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const GlowingChip = ({ children, count }: { children: string, count: number}) => {
    return (
        <span className="relative z-10 mb-4 inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-3 py-1.5 text-xs text-zinc-50 md:mb-0">
      {children} {count.toLocaleString('en-US')}
            <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0" />
    </span>
    );
};

const SocialMedias = () => {
    return (
        <ul className="flex p-1 px-2 gap-3">
            <li className="flex items-center">
                <a href="https://www.linkedin.com/in/chihtingyeh1995/" target="_blank" className="text-zinc-50 hover:text-zinc-200">
                    <FaLinkedin className="text-2xl text-zinc-50" />
                </a>
            </li>
            <li className="flex items-center">
                <a href="https://www.github.com/justinyeh1995" target="_blank" className="text-zinc-50 hover:text-zinc-200">
                    <FaGithub className="text-2xl text-zinc-50" />
                </a>
            </li>
            {/* <li className="flex items-center">
                <a href="mailto:justinyeh1995.com" target="_blank" className="text-zinc-50 hover:text-zinc-200">
                    <SiGmail className="text-2xl text-zinc-50" />
                </a>
            </li> */}
        </ul>
    );
};

const incrementVisitorCount = async () => {
    const response= await fetch("https://0lyaj9td4m.execute-api.us-east-2.amazonaws.com/default/visitorCount", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            websiteId: 'justinyeh1995.com',
            action: 'increment'
        })
    })
    return response.json();
}

const fetchVisitorCount = async () => {
    const websiteId = 'justinyeh1995.com';
    const action = 'get';
    const response = await fetch(`https://0lyaj9td4m.execute-api.us-east-2.amazonaws.com/default/visitorCount?websiteId=${websiteId}&action=${action}`);
    return response.json();
}

export const Content = () => {
    const [count, setCount] = useState(0);
    useEffect( () => {
        const getCount = async () => {
            const data = await incrementVisitorCount();
            const count: number = parseInt(data.count, 10);
            setCount(count);
        }
        getCount();
    }, []);

    return (
        <div className="relative z-20 mx-auto flex flex-col items-center justify-center px-4 py-12 md:px-8 md:py-36">
            <motion.div
                initial={{
                    y: 25,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.25,
                    ease: "easeInOut",
                }}
                className="mb-6 flex justify-center"
            >
                <GlowingChip count={count}>Exciting announcement 🎉: Visitors: </GlowingChip>
            </motion.div>
            <motion.h1
                initial={{
                    y: 25,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.25,
                    delay: 0.1,
                    ease: "easeInOut",
                }}
                className="mb-3 flex text-center items-center text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight"
            >
                Chih-Ting Yeh 🚀
            </motion.h1>
            <motion.div
                initial={{
                    y: 25,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.25,
                    delay: 0.25,
                    ease: "easeInOut",
                }}
                className="flex flex-col items-center gap-6 sm:flex-row"
            >
                <SocialMedias />
            </motion.div>
            <motion.div 
                initial={{
                    y: 25,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.25,
                    delay: 0.25,
                    ease: "easeInOut",
                }}
                className="flex flex-col items-center gap-6 mt-6">
                <button onClick={() => window.open('./resumes/resume.pdf', '_blank')} 
                    className="bg-indigo-300 text-white text-base md:text-lg font-medium px-8 py-2 
                                shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                    Download Resume
                </button>
            </motion.div>
        </div>
    );
};