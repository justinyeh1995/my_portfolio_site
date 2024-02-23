import React from "react";

const projects = [
    {
        title: "Project 1",
        image_url: "/images/test_images1.png",
        description: "This is a simple project",
    },
    {
        title: "Project 2",
        image_url: "/images/test_images1.png",
        description: "This is another simple project",
    },
    {
        title: "Project 3",
        image_url: "/images/test_images1.png",
        description: "This is yet another simple project",
    },
    ];

export default function ProjectSection() {
return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-5xl font-bold">My Projects</h1>
        <p className="text-2xl">This is a simple project section</p>
        <div className="grid grid-cols-3 gap-4">
            {projects.map((project) => (
                <div key={project.title} className="flex flex-col items-center">
                    <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-64 h-64 object-cover rounded-lg"
                    />
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-lg">{project.description}</p>
                </div>
            ))}
        </div>
    </section>
  );
}