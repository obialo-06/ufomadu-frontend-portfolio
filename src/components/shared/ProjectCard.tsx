import Tilt from "react-parallax-tilt";
import type { IProject } from "../../type";

interface Props {
  project: IProject;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
      <article
        onClick={onClick}
        className="
        cursor-pointer
        rounded-[32px]
        overflow-hidden
        border
        border-white/10
        bg-slate-900/50
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="
          h-[260px]
          w-full
          object-cover
          "
        />

        <div className="p-8">
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
