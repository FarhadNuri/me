import React from "react";
import { projectsItems } from "../constant/data";
import { RiExternalLinkLine, RiGithubFill } from "@remixicon/react";
const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <div className="container">
        <div>
          <h2 className="section-title">Projects</h2>
          <p className=" mt-3.5">
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and an opportunity to apply my skills
            in building modern web applications.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2
        lg:grid-cols-3 mt-10
        ">
            {projectsItems.map((item) => (
               <div key={item.id} className="border border-zinc-200 rounded-md
               overflow-hidden bg-zinc-100/40
               dark:border-zinc-800 dark:bg-zinc-900/40
               hover:!border-emerald-600/50 hover:shadow-lg
               hover:shadow-emerald-600/10 transition-all group
               ">
                <div className="overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="
                    w-full h-auto object-cover transition-transform
                    group-hover:scale-105
                    " />
                    <div className="absolute inset-0 bg-black/60 flex 
                    justify-center items-center
                    gap-4 opacity-0 group-hover:opacity-100 transition-opacity
                    ">
                        <a
                        href={item.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="
                        size-12 flex items-center bg-emerald-600 rounded-full
                        justify-center text-white
                        hover:bg-emerald-700 transition-colors
                        "><RiExternalLinkLine/></a>
                        <a
                        href={item.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="size-12 flex items-center bg-white rounded-full
                        justify-center text-black
                        hover:bg-zinc-200 transition-colors"><RiGithubFill/></a>
                    </div>
                </div>
                <div className="p-5 space-y-3">
                    <h3 className="text-xl group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                    <p className="line-clamp-2
                    hover:line-clamp-none
                    ">{item.text}</p>
                    <div className="flex gap-2 pt-2 flex-wrap">
                        {item.tags.map((tag,index) => (
                            <span key={index} className="
                            px-3 py-1 bg-emerald-600/10 text-emerald-600 rounded-full text-sm
                            font-medium border border-emerald-600/20
                            ">{tag}</span>
                        ))}
                    </div>
                </div>
               </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
