"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Rubik's Cube Solver",
    description: "Desktop application using computer vision to scan and solve Rubik's Cube in real-time.",
    image: "/projects/cube_solver.png",
    link: "https://github.com/Szostak21?tab=repositories"
  },
  {
    num: "02",
    title: "Gamified Personal Development",
    description: "Full-stack mobile app with cloud server that gamifies personal development.",
    image: "/projects/tree_1.png",
    link: "https://github.com/Szostak21?tab=repositories"
  },
  {
    num: "03",
    title: "Arcade Runner Game",
    description: "Arcade runner game with procedural terrain generation and dynamic gameplay.",
    image: "/projects/nebula.png",
    link: "https://github.com/Szostak21?tab=repositories"
  },
  {
    num: "04",
    title: "Guess Who Board Game",
    description: "Mobile adaptation of the classic board game with camera and gallery integration for custom boards.",
    image: "/projects/guess_who_1.jpg",
    link: "https://github.com/Szostak21?tab=repositories"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="w-full py-32 px-6 flex justify-center z-10 relative">
      <div className="max-w-6xl w-full flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-foreground/60 text-lg max-w-2xl">A curated selection of projects that made me confident in building software.</p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-40 mt-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-10 md:gap-20 items-center group"
            >
              <div className={`w-full md:w-5/12 flex flex-col gap-6 ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="text-primary/40 font-mono text-6xl md:text-8xl font-bold tracking-tighter">{project.num}</div>
                <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">{project.description}</p>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit mt-2 px-6 py-3 rounded-full glass hover:glass-strong flex items-center gap-2 transition-all duration-300 hover:text-primary hover:border-primary/50 group/btn"
                >
                  <span className="font-medium">View Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>
              </div>
              
              <div className={`w-full md:w-7/12 aspect-[4/3] md:aspect-[16/10] rounded-[2rem] overflow-hidden glass p-2 md:p-3 transition-transform duration-700 ease-out hover:scale-[1.02] ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                <div className="relative w-full h-full rounded-2xl md:rounded-[1.5rem] overflow-hidden bg-background/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
