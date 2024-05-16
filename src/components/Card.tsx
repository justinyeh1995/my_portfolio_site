import Image  from "next/image";

const Card = ({ title, description, image_url, url }: CardType) => {
    return (
        <div className="flex flex-col items-center">
            <Image
                src={image_url}
                alt={title}
                width={500}
                height={500}
                className="w-64 h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-lg">{description}</p>
            <a href={url} className="text-blue-500">Learn More</a>
        </div>
    );
}

export default Card;

type CardType = {
    title: string;
    description: string;
    image_url: string;
    id: number;
    url: string;
}