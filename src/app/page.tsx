'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Project from "@/components/Project/Project";
import {DarkGridHero} from "@/components/About/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
        <Header />
        <DarkGridHero />
        <Project />
    </main>
  );
}
