'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HeroSection />
    </main>
  );
}
