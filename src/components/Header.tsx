import React from "react";
import Link  from "next/link"


export default function Header() {
    return (
        <header className="flex items-center justify-between p-8">
            <h1 className="text-4xl font-bold p-8">My Page</h1>
            <nav>
                <ul className="flex space-x-8">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                </ul>
            </nav>
        </header>
    );
}