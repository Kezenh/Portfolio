type ProjectCardProps = {
  name: string;
  url: string;
  description: string;
};

const images = import.meta.glob(
  "../assets/images/cards images/*.png",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export default function ProjectCard({ name, url, description }: ProjectCardProps) {

  const imageUrl =
    images[`../assets/images/cards images/${name}.png`];

  return (
    <a className="bg-slate-400 dark:bg-slate-800 p-4 rounded-lg w-96 h-96 flex flex-col" href={url} target="_blank" rel="noopener noreferrer">
      <img className="min-h-32 object-contain" src={imageUrl} alt={name} />
      <div dangerouslySetInnerHTML={{ __html: description }} className="whitespace-pre-line text-justify h-full flex flex-col justify-between" />
    </a>
  );
}