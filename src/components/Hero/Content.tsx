import React, {useEffect, useState} from "react";
import { useQuery } from 'react-query';
import {motion} from "framer-motion";
import {GhostButton, SplashButton} from "@/components/Shared/Button";
import {FiArrowRight} from "react-icons/fi";

const GlowingChip = ({ children, count }: { children: string, count: number}) => {
    return (
        <span className="relative z-10 mb-4 inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-3 py-1.5 text-xs text-zinc-50 md:mb-0">
      {children} {count.toLocaleString('en-US')}
            <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0" />
    </span>
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
    // const { data, isLoading, isError } = useQuery('visitorCount', fetchVisitorCount);
    // const count = data?.count || 0;
    // if (isLoading) {
    //     return <motion.div>Loading...</motion.div>;
    // }
    //
    // if (isError) {
    //     return <motion.div>Error: Failed to fetch users</motion.div>;
    // }
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
        <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 md:px-8 md:py-36">
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
                className="relative"
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
                    duration: 1.25,
                    delay: 0.25,
                    ease: "easeInOut",
                }}
                className="mb-3 text-center text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight"
            >
                Chih-Ting Yeh 🚀
            </motion.h1>
            <motion.p
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
                    delay: 0.5,
                    ease: "easeInOut",
                }}
                className="mb-9 max-w-2xl text-center text-base leading-relaxed text-zinc-400 sm:text-lg md:text-lg md:leading-relaxed"
            >
                Hello, I'm Justin Yeh (Mandarin Name: 葉致廷 Yè Zhìtíng), a Master’s student in Computer Science at Vanderbilt University
                with a fervent interest in leveraging technology to solve complex problems, particularly within the realms of cybersecurity
                and data-driven applications.<br />
                Check out some projects that I've done.<br />
                Cheers! 🍻
            </motion.p>
            {/*<motion.div*/}
            {/*    initial={{*/}
            {/*        y: 25,*/}
            {/*        opacity: 0,*/}
            {/*    }}*/}
            {/*    animate={{*/}
            {/*        y: 0,*/}
            {/*        opacity: 1,*/}
            {/*    }}*/}
            {/*    transition={{*/}
            {/*        duration: 1.25,*/}
            {/*        delay: 0.75,*/}
            {/*        ease: "easeInOut",*/}
            {/*    }}*/}
            {/*    className="flex flex-col items-center gap-6 sm:flex-row"*/}
            {/*>*/}
            {/*    <SplashButton className="flex items-center gap-2">*/}
            {/*        Try it free*/}
            {/*        <FiArrowRight />*/}
            {/*    </SplashButton>*/}
            {/*    <GhostButton className="rounded-md px-4 py-2 text-zinc-100">*/}
            {/*        Learn more*/}
            {/*    </GhostButton>*/}
            {/*</motion.div>*/}
        </div>
    );
};