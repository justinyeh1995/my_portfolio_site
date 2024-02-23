'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <HeroSection />
        <ProjectSection />
    </main>
  );
}
