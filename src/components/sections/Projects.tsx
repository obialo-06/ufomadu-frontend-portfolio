// import ProjectCard from "./ProjectCard";
import SectionHeading from "../shared/SectionHeading";

import { projects } from "../../data/projects";
import { useState } from "react";

import ProjectCard from "../shared/ProjectCard";
import type { IProject } from "../../type";
import ProjectModal from "../shared/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  return (
    <section
      id="projects"
      className="
      py-32
      relative
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Featured Projects" subtitle="Portfolio" />

        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
