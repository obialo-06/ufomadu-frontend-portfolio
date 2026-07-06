import Tilt from "react-parallax-tilt";
import type { KeyboardEvent } from "react";
import type { IProject } from "../../type";

interface Props {
  project: IProject;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="h-full">
      <article
        onClick={onClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${project.title}`}
        className="
        cursor-pointer
        rounded-4xl
        overflow-hidden
        border
        border-white/10
        bg-slate-900/50
        h-full
        flex
        flex-col
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="
          h-65
          w-full
          object-cover
          flex-none
          "
        />

        <div className="p-8 flex flex-1 flex-col">
          <h3
            className="
            text-2xl
            font-bold
            "
          >
            {project.title}
          </h3>

          <p
            className="
            mt-4
            text-slate-400
            "
          >
            {project.description}
          </p>
        </div>
      </article>
    </Tilt>
  );
}
