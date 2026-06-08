import { X } from "lucide-react";
import type { IProject } from "../../type";

interface Props {
  project: IProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      bg-black/80
      backdrop-blur-md
      overflow-y-auto
      p-6
      "
    >
      <div
        className="
        lg:max-w-5xl
        max-w-full
        mx-auto
        bg-slate-900
        rounded-t-[32px]
        lg:rounded-[32px]
        overflow-hidden
        "
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            h-[350px]
            object-cover
            "
          />

          <button
            onClick={onClose}
            className="
            absolute
            top-4
            right-4
            bg-black/50
            p-2
            rounded-full
            "
          >
            <X />
          </button>
        </div>

        <div className="p-8">
          <h2
            className="
            text-4xl
            font-black
            "
          >
            {project.title}
          </h2>

          <p
            className="
            mt-4
            text-slate-400
            "
          >
            {project.description}
          </p>

          <div className="mt-10">
            <h3 className="font-bold text-xl">Problem</h3>

            <p className="mt-3 text-slate-400">{project.problem}</p>
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-xl">Solution</h3>

            <p className="mt-3 text-slate-400">{project.solution}</p>
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-xl">Responsibilities</h3>

            <ul className="mt-3 space-y-2">
              {project.responsibilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-xl">Technologies</h3>

            <div className="flex flex-wrap gap-3 mt-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-slate-800
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-xl">Impact</h3>

            <p className="mt-3 text-slate-400">{project.impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
