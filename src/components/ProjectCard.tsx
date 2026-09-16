import type { ReactNode } from "react";

type ProjectCardProps = {
  image: string;
  url: string;
  description: ReactNode;
};

const images = import.meta.glob(
  "../assets/images/cards images/*.png",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export default function ProjectCard({ image, url, description }: ProjectCardProps) {

  const imageUrl =
    images[`../assets/images/cards images/${image}.png`];

  return (
    <a className="bg-slate-800 p-4 rounded-lg w-96 h-96 m-4 flex flex-col" href={url} target="_blank" rel="noopener noreferrer">
      <img className="min-h-32 object-contain" src={imageUrl} alt={image} />
      <p className="text-slate-300 whitespace-pre-line text-justify h-full flex flex-col justify-between">{description}</p>
    </a>
  );
}