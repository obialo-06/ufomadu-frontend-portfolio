import SectionHeading from "../shared/SectionHeading";
import { caseStudy } from "../../data/caseStudy";

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Featured Case Study"
          subtitle="Enterprise Project"
        />

        <div
          className="
          case-study-card
          grid
          lg:grid-cols-2
          gap-10
          rounded-[32px]
          border
          border-white/10
          bg-slate-900/50
          backdrop-blur-md
          overflow-hidden
          "
        >
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="
            h-full
            min-h-[400px]
            w-full
            object-cover
            "
          />

          <div className="p-10">
            <h3
              className="
              text-3xl
              md:text-4xl
              font-black
              "
            >
              {caseStudy.title}
            </h3>

            <div className="mt-8">
              <h4 className="font-bold mb-3">Challenge</h4>

              <p className="text-slate-400">{caseStudy.challenge}</p>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-3">Responsibilities</h4>

              <ul className="space-y-2">
                {caseStudy.responsibilities.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-3">Technologies</h4>

              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech) => (
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

            <div className="mt-8">
              <h4 className="font-bold mb-3">Outcome</h4>

              <p className="text-slate-400">{caseStudy.outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
