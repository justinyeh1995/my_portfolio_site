import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Content} from "@/components/Hero/Content";
import { Beams } from "@/components/Hero/Beams";
import { GradientGrid } from "@/components/Hero/GradientGrid";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-zinc-950">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-4 items-center">
                <div className="col-span-12">
                    <Content />
                    <Beams />
                    <GradientGrid />
                </div>
            </div>
        </section>
    );
};



