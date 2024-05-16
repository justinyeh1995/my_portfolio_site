import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "@/components/Card";

export default function Project() {
    const [offset, setOffset] = useState(0);
    return (
        <section className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative overflow-hidden p-4">
                {/* CARDS */}
                <div className="mx-auto max-w-6xl">
                    <p className="mb-4 text-2xl font-semibold">
                        Everything. <span className="text-slate-500">Projects.</span>
                    </p>
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
        title: "Project 1",
        image_url: "/images/test_images1.png",
        description: "This is a simple project",
        url: "/project/1",
    },
    {
        id: 2,
        title: "Project 2",
        image_url: "/images/test_images1.png",
        description: "This is another simple project",
        url: "/project/2",
    },
    {
        id: 3,
        title: "Project 3",
        image_url: "/images/test_images1.png",
        description: "This is yet another simple project",
        url: "/project/3",
    },
    ];

