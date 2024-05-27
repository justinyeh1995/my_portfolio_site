import Carousel from "@/components/Project/Carousel";
import useMeasure from "react-use-measure";
import {motion} from "framer-motion";
import React from "react";

export default function Project() {
    const [ref, { width }] = useMeasure();
    return (
        <section id="Projects" ref={ref} className="flex min-h-screen flex-col bg-zinc-950 items-center justify-between p-24">
            <div className=" overflow-hidden p-4">
                {/* CARDS */}
                <div className="mx-auto max-w-6xl">
                    <motion.h1
                        initial={{ y: 25, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.25, ease: "easeInOut" }}
                        className="text-4xl font-bold text-gray-100 mb-6"
                    >
                        Recent Projects
                    </motion.h1>
                    <Carousel items={projects} />
                </div>
            </div>
        </section>
  );
}

const projects = [
    {
        id: 1,
        title: "SolitaireJS",
        image_url: "/images/solitairejs.png",
        description: "A web-based solitaire game built with ReactJS.",
        url: "https://solitairejs.com/",
    },
    {
        id: 2,
        title: "CybORG-Mininet",
        image_url: "/images/cyborg-mininet.png",
        description: "A Cyber Operations Research Gym extension with Mininet.",
        url: "https://github.com/CASTLEGym/CybORG/tree/mininet/CybORG/Mininet",
    },
    {
        id: 3,
        title: "CybORG-ARViz",
        image_url: "/images/test_images1.png",
        description: "A 3D visualization tool for CybORG using RealityKit.",
        url: "https://github.com/justinyeh1995/CybORG-ARViz/tree/main",
    },
    ];

