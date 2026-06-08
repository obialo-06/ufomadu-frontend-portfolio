import SectionHeading from "../shared/SectionHeading";
import { experiences } from "../../data/experience";
export default function Experience() {
  return (
    <section
      id="experience"
      className="
      py-32
      relative
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Professional Experience"
          subtitle="Career Journey"
        />

        <div className="relative">
          <div
            className="
            absolute
            left-4
            md:left-1/2
            top-0
            bottom-0
            w-[2px]
            bg-slate-800
            "
          />

          {experiences.map((item, index) => (
            <div
              key={item.company}
              className={`
                experience-card
                relative
                mb-16
                flex
                ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
              `}
            >
              <div
                className="
                ml-12
                md:ml-0
                w-full
                md:w-[45%]
                "
              >
                <div
                  className="
                bg-slate-900/50
                  backdrop-blur-xl
                border-white/10                  
                  border
                  rounded-3xl
                  p-8
                  "
                >
                  <p className="text-blue-400 font-semibold mb-2">
                    {item.period}
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    {item.company}
                  </h3>

                  <p className="text-slate-400 mt-2">{item.role}</p>

                  <ul className="mt-6 space-y-3">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="text-slate-300">
                        • {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="
                absolute
                left-4
                md:left-1/2
                -translate-x-1/2
                h-5
                w-5
                rounded-full
                bg-blue-500
                border-4
                border-[#050816]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
