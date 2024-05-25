import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const Card = ({
                  title,
                  description,
                  image_url,
                  url,
              }: CardType) => {
    return (
        <div className="w-72 mx-4">
        <div>
            <h3 className="text-xl mb-2 font-semibold text-blue-200">{title}</h3>
            <p className="text-sm font-light text-slate-300">{description}</p>
        </div>
        <motion.div
            whileHover="hover"
            className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg cursor-pointer group"
        >
            <motion.div
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.3 }}
                className="absolute inset-0 z-10 transition-opacity duration-300"
            >
                <Image
                    src={image_url}
                    alt={title}
                    fill={true}
                    className="w-full h-full rounded-lg"
                />
            </motion.div>
            <div className="relative z-20 p-6 flex flex-col justify-between h-full">
                <motion.a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    Learn More <FiArrowRight className="ml-2" />
                </motion.a>
            </div>
        </motion.div>
        </div>
    );
};


export default Card;

type CardType = {
    title: string;
    description: string;
    image_url: string;
    url: string;
}