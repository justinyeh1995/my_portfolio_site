'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import HeroSection from "@/components/DarkGridHero";
import Header from "@/components/Header/Header";
import ProjectSection from "@/components/ProjectSection";
import Project from "@/components/Project";
import {DarkGridHero} from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
        <Header />
        <DarkGridHero />
        {/*<ProjectSection />*/}
        <Project />
    </main>
  );
}
