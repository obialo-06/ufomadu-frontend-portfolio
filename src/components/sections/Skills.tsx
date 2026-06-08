import SectionHeading from "../shared/SectionHeading";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section
      className="
      skills-section
      py-32
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technology Stack"
        />

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-4
          "
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className="
              skill-chip
              px-6
              py-3
              rounded-full
              bg-slate-900
              border
              border-white/10
              text-slate-300
              font-medium
              transition-all
              duration-300
              hover:scale-110
              hover:border-blue-500
              hover:text-white
              hover:-translate-y-2
hover:shadow-lg
hover:shadow-blue-500/20
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
