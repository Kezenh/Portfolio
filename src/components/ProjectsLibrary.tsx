import ProjectCard from './ProjectCard'
import projects from '../assets/datas/projects.json'
import { useState } from 'react'

export default function ProjectsLibrary() {

    const [reversed, setReversed] = useState(false);
    const sortedProjects = reversed ? [...projects].reverse() : projects;

  return (
        <>
            <button className="m-4 px-4 py-2 border-2 border-slate-500 font-pixel text-xl hover:bg-slate-200 dark:hover:bg-slate-800 active:translate-y-1 transition-transform cursor-pointer" onClick={() => setReversed(!reversed)}>
                Les plus récents {reversed ? "\u2191" : "\u2193"}
            </button>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(24rem,1fr))] justify-items-center mx-auto w-full gap-4 px-4">
                {sortedProjects.map((project) => (
                    <ProjectCard 
                        key={project.name}
                        name={project.name}
                        url={project.url} 
                        description={project.description}
                    />
                ))}
            </div>
        </>
    );
}