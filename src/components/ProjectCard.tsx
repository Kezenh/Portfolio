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
    <a className="bg-slate-400 dark:bg-slate-800 p-4 rounded-lg w-[80vw] max-w-96 aspect-square flex flex-col" href={url} target="_blank" rel="noopener noreferrer">
      <img className="h-1/4 object-contain" src={imageUrl} alt={name} />
      <div dangerouslySetInnerHTML={{ __html: description }} className="h-3/4 grid gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-300 dark:scrollbar-thumb-slate-500 dark:scrollbar-track-slate-700 p-4 pr-0 scrollbar-gutter-stable" />
    </a>
  );
}