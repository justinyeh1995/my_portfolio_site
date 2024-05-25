import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "@/components/Project/Card";
import SharedLayout from "@/components/Shared/Layout/SharedLayout";

export default function Project() {
    const [offset, setOffset] = useState(0);
    return (
        <section id="Projects" className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className=" overflow-hidden p-4">
                {/* CARDS */}
                <div className="mx-auto max-w-6xl">
                    <h1 className="mb-4 text-2xl font-semibold">
                        Recent <span className="text-slate-500">Projects.</span>
                    </h1>
                    <motion.div
                        animate={{
                            x: offset,
                        }}
                        className="flex"
                    >
                        {projects.map((project) => {
                            return <Card key={project.id} {...project} />;
                        })}
                    </motion.div>
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

