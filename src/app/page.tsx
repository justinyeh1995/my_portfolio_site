'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Project from "@/components/Project/Project";
import {Hero} from "@/components/Hero/Hero";
import AboutMe from "@/components/About/About";
import {Footer} from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex-col items-center">
        <Header />
        <Hero />
        <AboutMe />
        <Project />
        <Footer />
    </main>
  );
}
