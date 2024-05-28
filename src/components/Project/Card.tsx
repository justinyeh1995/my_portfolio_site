import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import React from "react";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const Card = ({ id, url, image_url, title, description }: CardType) => {
    return (
        <div
            className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
            style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                marginRight: MARGIN,
                backgroundImage: `url(${image_url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
                <p className="my-2 text-3xl font-bold">{title}</p>
                <p className="text-lg text-slate-300">{description}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 z-20 transition-opacity duration-300 ease-in-out">
                <span className="text-blue-200 text-lg"><a href={url} target={"_blank"}>Learn More</a></span><FiArrowRight className="text-blue-200 text-lg ml-2" />
            </div>
        </div>
    );
};

export default Card;

type CardType = {
    id: number;
    title: string;
    description: string;
    image_url: string;
    url: string;
}